'use client';

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function MaterialsSection() {
  const [materials, setMaterials] = useState(["yarn", "plastic bottle", "waste paper"]);
  const [newMaterial, setNewMaterial] = useState("");

  const addMaterial = () => {
    if (newMaterial.trim()) {
      setMaterials([...materials, newMaterial.trim()]);
      setNewMaterial("");
    }
  };

  const removeMaterial = (i) => {
    setMaterials(materials.filter((_, index) => index !== i));
  };

  return (
    <section className="bg-white border-4 border-black p-6 md:p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl font-black mb-4">Materials you've got:</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {materials.map((m, i) => (
          <span key={i} className="bg-pink-300 border-2 border-black px-3 py-1 font-bold flex items-center gap-2">
            {m}
            <button onClick={() => removeMaterial(i)} className="hover:scale-110">
              <X size={16} />
            </button>
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newMaterial}
          onChange={(e) => setNewMaterial(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addMaterial()}
          placeholder="Add material..."
          className="flex-1 border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
        />
        <button onClick={addMaterial} className="bg-cyan-400 border-4 border-black p-2 hover:bg-cyan-500">
          <Plus size={24} />
        </button>
      </div>
    </section>
  );
}
