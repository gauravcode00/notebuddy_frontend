export default function NoteFilter({ value, onChange }) {
  return (
    <div className="flex justify-center mb-8">
      <input
  type="text"
  value={value}
  onChange={e => onChange(e.target.value)}
  placeholder="Search notes by title, subject, or publisher..."
  className="w-full max-w-xl px-6 py-3 rounded-2xl bg-[#181f2b] border border-[#232b3b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg transition"
/>
    </div>
  );
}
