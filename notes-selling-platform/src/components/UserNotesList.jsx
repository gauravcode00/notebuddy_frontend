import { useEffect, useState } from "react";

export default function UserNotesList({ token }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/notes/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setNotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token, status]);

  const handleDelete = async (noteId) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    setStatus("Deleting...");
    try {
      const res = await fetch(`http://localhost:8080/api/notes/${noteId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setStatus("Deleted successfully");
      setNotes(notes.filter(n => n.id !== noteId));
    } catch (err) {
      setStatus("Delete failed");
    }
  };

  return (
    <div className="bg-[#232b3b] rounded-2xl shadow-xl p-8 mt-8 border border-[#30384a]">
      <h3 className="text-xl font-bold mb-4 text-indigo-400">Your Uploaded Notes</h3>
      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : notes.length === 0 ? (
        <div className="text-center text-gray-500">You haven’t uploaded any notes yet.</div>
      ) : (
        <ul className="divide-y divide-[#30384a]">
          {notes.map(note => (
            <li key={note.id} className="py-3 flex justify-between items-center">
              <div>
                <div className="font-semibold text-indigo-300">{note.title}</div>
                <div className="text-sm text-gray-400">{note.subject}</div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-1.5 rounded-xl hover:bg-red-700 transition"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {status && <div className="text-center text-sm mt-2 text-indigo-300">{status}</div>}
    </div>
  );
}
