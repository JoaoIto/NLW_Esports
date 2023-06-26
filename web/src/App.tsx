import { useEffect, useState } from "react";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import "./styles/main.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
  fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data);
    })
    .catch(error => {
      console.error('ESTE É O ERRO: ' + error);
    });
}, []);

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
      <CreateAdBanner/>
    </div>
  );
}

export default App;
