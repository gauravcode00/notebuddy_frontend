import { useState } from "react";

export default function NoteUploadForm({ token }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    subject: "",
    price: "",
    file: null,
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Uploading...");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("subject", form.subject);
    formData.append("price", form.price);
    formData.append("file", form.file);

    try {
      const res = await fetch("http://localhost:8080/api/notes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      setStatus("Upload successful!");
      setForm({
        title: "",
        description: "",
        subject: "",
        price: "",
        file: null,
      });
    } catch (err) {
      setStatus("Upload failed");
    }
  }

  return (
    <div className="bg-[#232b3b] rounded-2xl shadow-xl border border-[#30384a] p-8 w-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-indigo-400">Upload a New Note</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1 text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-xl bg-[#181f2b] border border-[#30384a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-300">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl bg-[#181f2b] border border-[#30384a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            rows={3}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-300">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-xl bg-[#181f2b] border border-[#30384a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-300">Semester</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 rounded-xl bg-[#181f2b] border border-[#30384a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-300">PDF File</label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            onChange={handleChange}
            required
            className="w-full text-gray-200 file:bg-indigo-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-none file:cursor-pointer"
          />
        </div>
        {status && (
          <div className="text-center text-sm text-indigo-300">{status}</div>
        )}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition w-full font-semibold text-lg mt-4"
        >
          Upload Note
        </button>
      </form>
    </div>
  );
}
