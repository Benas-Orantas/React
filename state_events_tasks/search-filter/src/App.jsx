import { useMemo, useState } from "react";
import "./App.css";
import List from "./components/List";
import SearchFilter from "./components/SearchFilter";

function App() {
  const games = [
    "Oneshot",
    "Undertale",
    "Deltarune",
    "Hollow Knight",
    "Hollow Knight: Silksong",
    "Minecraft",
    "Five Night's at Freddy's",
    "Five Night's at Freddy's 2",
    "Five Night's at Freddy's 3",
    "Five Night's at Freddy's 4",
    "Plants vs Zombies",
    "The Henry Stickmin Collection",
    "ULTRAKILL",
    "Revita",
    "Among Us",
    "Slay the Princess"
  ];


  const [gamesList] = useState(games);

  const [search, setSearch] = useState("")

  const filter = useMemo(() => {
    const f = search.toLowerCase().trim();
    return gamesList.filter((game) => game.toLowerCase().includes(f))
  }, [gamesList, search])

  return (
    <div className="flex flex-col justify-center mt-2 ml-2 gap-10">
      <SearchFilter search={search} setSearch={setSearch}/>
      <List games={filter}/>
    </div>
  );
}

export default App;
