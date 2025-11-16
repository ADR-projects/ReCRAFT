import { logos } from "../assets/crafts";

export default function Header() {
  return (
    <header className="border-b-4 border-black py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <img src={logos.heartIcon} alt="heart" width={64} height={64} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2 text-black tracking-tight">CraftSpark-AI</h1>
        <p className="text-xl md:text-2xl font-bold text-black">Got waste? Make some art!</p>
      </div>
    </header>
  );
}
