import React from "react";

const Footer = () => (
  <footer className="w-full bg-[#111827] py-5 mt-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-400 text-sm">
      <div>
        &copy; {new Date().getFullYear()} Notes Platform — All rights reserved.
      </div>
      <div className="mt-3 md:mt-0 flex flex-col md:flex-row md:items-center gap-2">
        <span>
          Developed by <span className="text-indigo-400 font-semibold">Gaurav</span>
        </span>
        <a
          href="mailto:your.email@example.com"
          className="text-indigo-300 hover:text-indigo-500 transition ml-0 md:ml-2"
        >
          gaurav.9817.9817@example.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
