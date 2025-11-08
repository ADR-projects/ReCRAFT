'use client';

import { useState } from "react";
import { Edit2 } from "lucide-react";

export default function ProfileSection({ skills, setSkills, themes, setThemes, wantToTry, setWantToTry }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="bg-white border-4 border-slate-900 p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-slate-900">Your Profile</h2>
        <button onClick={() => setIsEditing(!isEditing)} className="p-2 hover:bg-slate-100 rounded transition-colors">
          <Edit2 size={20} />
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-bold mb-1 text-slate-700">My Skills:</span>
            <input
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full p-2 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold mb-1 text-slate-700">Want to try:</span>
            <input
              value={wantToTry}
              onChange={(e) => setWantToTry(e.target.value)}
              className="w-full p-2 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold mb-1 text-slate-700">Theme(s):</span>
            <input
              value={themes}
              onChange={(e) => setThemes(e.target.value)}
              className="w-full p-2 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </label>

          <button
            onClick={() => setIsEditing(false)}
            className="w-full bg-slate-900 text-white font-bold py-2 px-4 hover:bg-slate-700 transition-colors border-2 border-slate-900"
          >
            Update SkillSet
          </button>
        </div>
      ) : (
        <div className="space-y-2 text-slate-700">
          <p><span className="font-bold">My Skills:</span> {skills}</p>
          <p><span className="font-bold">Want to try:</span> {wantToTry}</p>
          <p><span className="font-bold">Theme(s):</span> {themes}</p>
        </div>
      )}
    </section>
  );
}
