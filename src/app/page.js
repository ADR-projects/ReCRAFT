'use client';

import { useState } from "react";
import Header from '../components/Header.jsx'
import ProfileSection from '@/components/ProfileSection.jsx';
import MaterialsSection from '@/components/Materials.jsx';
import CraftsGrid from '@/components/CraftsGrid.jsx';

export default function Home() { // here is an innocent comment
  const [skills, setSkills] = useState("Crotchet, Origami");
  const [themes, setThemes] = useState("Eco-friendly, Cutesy");
  const [wantToTry, setWantToTry] = useState("Painting");
  const [materials, setMaterials] = useState(["yarn", "plastic bottle", "waste paper"]);

  const [generatedCrafts, setGeneratedCrafts] = useState([]);

  // 🧠 Function to call backend API
  const generateCraftIdeas = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills, themes, wantToTry, materials }),
    });

    const data = await response.json();
    setGeneratedCrafts(data.ideas || []); // assume backend returns { ideas: [...] }
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Header />
        <ProfileSection
          skills={skills}
          setSkills={setSkills}
          themes={themes}
          setThemes={setThemes}
          wantToTry={wantToTry}
          setWantToTry={setWantToTry}
        />

        <MaterialsSection materials={materials} setMaterials={setMaterials} />

        <div className="text-center mb-8">
          <button
            onClick={generateCraftIdeas}
            className="bg-slate-900 text-white font-bold py-3 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Generate Craft Ideas 🎨
          </button>
        </div>

        <CraftsGrid crafts={generatedCrafts} />

      </div>
    </main>
  );
}
