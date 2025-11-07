'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, X, Edit2 } from 'lucide-react';
import { crafts, logos } from '../assets/crafts.js'

export default function Home() {
  const [skills, setSkills] = useState('Crotchet, Origami');
  const [wantToTry, setWantToTry] = useState('Painting');
  const [materials, setMaterials] = useState(['yarn', 'plastic bottle', 'waste paper']);
  const [isEditing, setIsEditing] = useState(false);
  const [newMaterial, setNewMaterial] = useState('');


  const addMaterial = () => {
    if (newMaterial.trim()) {
      setMaterials([...materials, newMaterial.trim()]);
      setNewMaterial('');
    }
  };

  const removeMaterial = (index) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="border-b-4 border-black py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-4"><img src={logos.heartIcon} alt="heart" width={64} height={64} /></div>
            <h1 className="text-3xl md:text-4xl font-black mb-2 text-black tracking-tight">ReCRAFT</h1>
            <p className="text-xl md:text-2xl font-bold text-black">Got waste? Make some art!</p>
          </div>
        </header>

        <section className="bg-white border-4 border-slate-900 p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-slate-900">Your Profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 hover:bg-slate-100 rounded transition-colors"
            >
              <Edit2 size={20} />
            </button>
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-slate-700">My Skills:</label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full p-2 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-slate-700">Want to try:</label>
                <input
                  type="text"
                  value={wantToTry}
                  onChange={(e) => setWantToTry(e.target.value)}
                  className="w-full p-2 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="w-full bg-slate-900 text-white font-bold py-2 px-4 hover:bg-slate-700 transition-colors border-2 border-slate-900"
              >
                Update SkillSet
              </button>
            </div>
          ) : (
            <div className="space-y-2 text-slate-700">
              <p>
                <span className="font-bold">My Skills:</span> {skills}
              </p>
              <p>
                <span className="font-bold">Want to try:</span> {wantToTry}
              </p>
            </div>
          )}
        </section>
        <section>
          <div className="bg-white border-4 border-black p-6 md:p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-black mb-4">Materials you've got:</h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {materials.map((material, index) => (
                <span key={index} className="bg-pink-300 border-2 border-black px-3 py-1 font-bold flex items-center gap-2">
                  {material}
                  <button onClick={() => removeMaterial(index)} className="hover:scale-110">
                    <X size={16} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newMaterial}
                onChange={(e) => setNewMaterial(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addMaterial()}
                placeholder="Add material..."
                className="flex-1 border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-400"
              />
              <button
                onClick={addMaterial}
                className="bg-cyan-400 border-4 border-black p-2 hover:bg-cyan-500"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crafts.map((craft) => (
              <Link key={craft.id} href={`/craft/${craft.id}`}>
                <div className="bg-white border-4 border-black overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                  <div className="h-48 bg-gray-200 border-b-4 border-black overflow-hidden">
                    <img src={craft.image} alt={craft.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-black mb-2">Try making: {craft.title}</h3>
                    <p className="text-sm line-clamp-3">{craft.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
