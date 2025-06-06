import React from "react";

const AboutUs = () => (
  <div className="max-w-3xl mx-auto py-16 px-4 md:px-0">
    <h2 className="text-3xl font-bold mb-4 text-indigo-400">About Notes Buddy</h2>
    <p className="mb-4 text-lg text-gray-200">
      <strong className="text-indigo-200">Notes Buddy</strong> is your trusted companion for all things college academics. We believe that sharing knowledge makes everyone stronger, so we've created a free, easy-to-use platform where students can find and share semester notes, past year papers, and study resources—all in one place.
    </p>
    <ul className="list-disc ml-6 mb-4 text-gray-200 space-y-1">
      <li>
        <span className="text-indigo-300">Search</span> for notes and past papers from your college and branch, organized by semester and subject.
      </li>
      <li>
        <span className="text-indigo-300">Download</span> resources instantly to help you ace your exams, projects, or assignments.
      </li>
      <li>
        <span className="text-indigo-300">Share</span> your own notes and help your juniors or classmates—giving back to the community!
      </li>
      <li>
        Completely free and open for everyone—because learning should have no barriers.
      </li>
    </ul>
    <p className="text-gray-400">
      Our mission is to make college life easier by making academic resources accessible for all. Join Notes Buddy, support your friends, and never struggle to find notes again!
    </p>
  </div>
);

export default AboutUs;
