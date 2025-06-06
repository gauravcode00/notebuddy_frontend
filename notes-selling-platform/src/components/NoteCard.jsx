import SpotlightCard from "./SpotlightCard";

export default function NoteCard({ note, onClick }) {
  return (
    <SpotlightCard
      className="cursor-pointer hover:ring-2 hover:ring-indigo-400 transition flex flex-col items-center gap-2"
      spotlightColor="rgba(255, 255, 255, 0.25)" // a soft indigo glow
      onClick={onClick}
      tabIndex={0} // Allows keyboard focus for accessibility
    >
      <h2 className="text-lg font-bold text-indigo-400 text-center">{note.title}</h2>
      <div className="text-gray-400 text-center">{note.subject}</div>
      <div className="text-gray-500 text-sm line-clamp-2 text-center">{note.description}</div>
      <div className="font-semibold text-indigo-300 text-center">₹{note.price}</div>
    </SpotlightCard>
  );
}
