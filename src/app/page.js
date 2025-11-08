'use client';
import Header from '../components/Header.jsx'
import { useState } from 'react';
import Link from 'next/link';
import { Plus, X, Edit2 } from 'lucide-react';
import { crafts, logos } from '../assets/crafts.js'
import ProfileSection from '@/components/ProfileSection.jsx';
import Materials from '@/components/Materials.jsx';
import CraftsGrid from '@/components/CraftsGrid.jsx';

export default function Home() {

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <Header />
       <ProfileSection />
       <Materials />
       <CraftsGrid />
      </div>
    </main>
  );
}
