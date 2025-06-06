import { useRef, useEffect, useState } from "react";
import pdfLogo from "../assets/pdf_logo.png";

export default function NoteDetailCard({ note, onDownload }) {

  return (
    <div className="bg-[#181f2b] rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6 border border-[#232b3b] mb-10">
      {/* PDF Logo instead of preview */}
      <div className="w-[240px] shrink-0 flex items-center justify-center">
        <img src={pdfLogo} alt="PDF" className="w-50 h-50 object-contain" />
      </div>

      {/* Note details */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-2 text-sm text-gray-400 font-medium">
          Uploaded by: {note.uploaderEmail || "Unknown"}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-indigo-400">
          Title: {note.title}
        </h2>
        <div className="text-gray-300 mb-3">Description : {note.description}</div>
        <div className="mb-4 font-bold text-indigo-300 text-xl">
          Semester: {note.price}
        </div>
        <button
          onClick={() => onDownload(note.id, note.fileKey)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition font-semibold"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
