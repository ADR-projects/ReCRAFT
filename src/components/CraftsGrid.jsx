import Link from "next/link";
import { crafts } from "../assets/crafts";

export default function CraftGrid({ crafts }) {
    if (!crafts.length) {
        return (
            <div className="text-center text-gray-500 font-medium py-8">
                No ideas yet, click "Generate Craft Ideas 🎨" above!
            </div>
        );
    }
    return (

        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
    );
}