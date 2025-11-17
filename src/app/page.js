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

  // to call backend API
  const generateCraftIdeas = async () => {
    const response = await fetch("http://localhost:5001/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills, themes, wantToTry, materials }),
    });

    if (response.status === 503) {
      alert("AI is overloaded...please try again in a moment.");
      return;
    }
    const data = await response.json();
    if (data.craftsData) {
      console.log("Found the crafts.")

      setGeneratedCrafts(
        Object.entries(data.craftsData).map(([id, craft]) => ({
          id: Number(id),
          title: craft.title,
          image: craft.image,
        }))
      );

    }
    else {
      console.error("No crafts data found", data);
    }
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-4 md:py-6">
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
      </div>
      <div className="max-w-7xl mx-auto pb-15 px-4"><CraftsGrid crafts={generatedCrafts} /></div>

    </main>
  );
}
