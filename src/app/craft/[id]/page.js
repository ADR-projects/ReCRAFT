import CraftDetailsClient from "./CraftDetails";

// export const dynamic = "force-dynamic"; 
// ensures Next.js doesn't try to statically pre-render

export default async function CraftDetailsPage({ params }) {
  const { id } = await params;
  const numericId = Number(id);
  return <CraftDetailsClient id={numericId} />;
}
