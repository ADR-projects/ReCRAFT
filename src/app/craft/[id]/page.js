import CraftPageClient from './craft-client.js';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default async function CraftPage({ params }) {

  const {id} = await params;
  return <CraftPageClient id={id} />;
}
