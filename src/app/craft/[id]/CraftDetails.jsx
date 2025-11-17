'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
// import {craftsData} from '../../../assets/crafts.js'
import { useEffect, useState } from "react";

console.log("🎃 DETAILS MOUNTED?!")

export default function CraftDetailsClient({ id }) {
  const router = useRouter();
  const [craft, setCraft] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // load basic info 
  useEffect(() => {
    const saved = localStorage.getItem("generatedCrafts");
    if (!saved) return;

    const list = JSON.parse(saved);
    const foundId = list.find(c => c.id === id);

    setCraft(foundId || null);
    console.log(`this has been clicked : ${foundId}`);
  }, [id])

  // fetch details for clicked idea from backend
  useEffect(() => {
    if (!id || !craft || !craft.title) return;


    async function loadDetails() {
      try {
        const response = await fetch("http://localhost:5001/generate/details", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: craft.title,
          }),
        });

        const data = await response.json();
        setDetails(prevData => ({
          ...prevData,
          materials: data.materials,
          steps: data.steps,
          description: data.description,
        }));
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setLoading(false);
      }
    }
    loadDetails(); // call the load function!

  }, [craft]);

  if (!craft) { // details not found!
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
        <div className="bg-white border-4 border-black p-8 text-center">
          <h1 className="text-2xl font-black mb-4">Craft Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white font-bold py-2 px-6 border-4 border-black hover:bg-white hover:text-black transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="border-b-4 border-black bg-pink-300 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 bg-black text-white font-bold py-2 px-4 border-4 border-black hover:bg-white hover:text-black transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl font-black text-black">{craft.title}</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="h-64 md:h-96 bg-gray-200 border-b-4 border-black">
            <img src={craft.image} alt={craft.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-8">
            <p className="text-lg mb-6">{details?.description || "Loading details..."}</p>
            {/*
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cyan-400 border-4 border-black p-4">
                <h3 className="font-black mb-1">Difficulty</h3>
                <p className="text-lg">{craft.difficulty}</p>
              </div>
              <div className="bg-pink-300 border-4 border-black p-4">
                <h3 className="font-black mb-1">Time Needed</h3>
                <p className="text-lg">{craft.time}</p>
              </div>
            </div>
           */}
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6 md:p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2">Materials Needed</h2>
          {!details ? (
            <p>Loading materials...</p>
          ) : (
            <ul className="space-y-2">
              {details.materials.map((material, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="bg-black text-white font-black px-2 py-1 text-sm mt-1">✓</span>
                  <span className="text-lg flex-1">{material}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white border-4 border-black p-6 md:p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2">Step-by-Step Instructions</h2>
          {!details ? (
            <p>Loading steps...</p>
          ) : (
            <ol className="space-y-4">
              {details.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-orange-400 border-4 border-black font-black px-4 py-2 text-xl shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-lg flex-1 py-2">{step}</p>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="bg-cyan-400 border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-3">Happy Crafting!</h2>
          {/* <p className="text-lg">{craft.tips}</p> */}
        </div>
      </main>
    </div>
  );
}
