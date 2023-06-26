import { GameBanner } from "./components/GameBanner";
import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src="/logo.svg" />
      <h1 className="text-6xl text-white font-black mt-20">
        Procure seu{" "}
        <span className=" text-transparent bg-nlwGradientText bg-clip-text">
          duo
        </span>{" "}
        aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/public/game1.png" title="League of Legends" addCount={5}/>
        <GameBanner bannerUrl="/public/game2.png" title="Dota 2" addCount={2}/>
        <GameBanner bannerUrl="/public/game3.png" title="CS GO" addCount={12}/>
        <GameBanner bannerUrl="/public/game4.png" title="Apex Legends" addCount={11}/>
        <GameBanner bannerUrl="/public/game5.png" title="Fortnite" addCount={4}/>
        <GameBanner bannerUrl="/public/game6.png" title="World Warwcraft" addCount={5}/>
      </div>
      <div className="pt-1 bg-nlwGradientText mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2x text-white font-black block">
              Não achou duo pro camp?
            </strong>
            <span className="text-zinc-400">
              Dá um SOS ae pra chamar ele pra call!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Chamar SOS duo!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
