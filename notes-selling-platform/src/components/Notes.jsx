import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NoteDetailCard from "./NoteDetailCard"; // <-- Use the new component
import NoteFilter from "./NoteFilter";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  function handleDownload(noteId, filename) {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/api/notes/${noteId}/download`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (!response.ok) throw new Error("Download failed");
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || "note.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => alert("Download failed: " + err.message));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    fetch("http://localhost:8080/api/notes/all", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setNotes)
      .catch(err => console.error("Failed to fetch notes:", err));
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <main className="flex-1 max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-400 drop-shadow">
          Notes
        </h1>
        <NoteFilter value={filter} onChange={setFilter} />
        {/* Instead of grid, show a vertical list of NoteDetailCards */}
        <div>
          {notes
            .filter(note =>
              [
                note.title || "",
                note.subject || "",
                note.uploaderEmail || ""
              ]
                .join(" ")
                .toLowerCase()
                .includes(filter.toLowerCase())
            )
            .map(note => (
              <NoteDetailCard
                key={note.id}
                note={note}
                onDownload={handleDownload}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
