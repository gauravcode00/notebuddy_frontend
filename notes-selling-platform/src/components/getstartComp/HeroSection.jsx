// src/components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import noteIllustration from "../../assets/home_logo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-between py-12 px-6 md:px-16 text-white">
      <div className="w-full max-w-xl space-y-6">
        <p className="text-sm uppercase text-gray-400 tracking-widest">
          Your College Notes Hub
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-indigo-400">Notes Buddy</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          <span className="text-indigo-300">Find all your college notes, past year papers, and more—organized by semester and subject.</span>
          <br />
          Whether you need study materials for exams, assignments, or just to catch up, Notes Buddy has you covered.
          <br />
          <br />
          <span className="text-gray-400">
            Start exploring and download what you need—free and easy. Got great notes? Help others and upload yours too!
          </span>
        </p>
        <div className="flex items-center gap-4">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden md:block w-[50%] pl-10">
        <img
          src={noteIllustration}
          alt="Notes Buddy Illustration"
          className="w-full max-w-lg animate-fade-in-up"
        />
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
