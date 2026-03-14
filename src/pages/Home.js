import React, { useState , useRef } from "react";
import songs from "../data/songs";
import SongCard from "../components/SongCard";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import playlist from "../data/playlist"


function Home(){
  const [search,setSearch] = useState("");
  const[category, setCategory]= useState("all");

const [currentSong,setCurrentSong] = useState(null);
const searchRef = useRef(null);

return(



<div className="container">

<Sidebar focusSearch={() => searchRef.current?.focus()} 
  setCategory={setCategory}/>

<div className="main">
<div>
<input 
ref={searchRef}
className="search-bar"
 type="text" placeholder="Search songs..." 
onChange={(e) =>setSearch(e.target.value)}
  />
</div>

<h1>Popular Songs</h1>

{category === "playlists" ? (
  <div className="playlists">
    {playlist.map((list) => (
      <div className="playlist-card"
    key={list.id}
    onClick={() => alert("coming soon!This feature will be available soon.")}>
      {list.name}
      </div>
    ))}
  </div>
) : (

<div className="songs">

{songs
.filter((song) => song.title.toLowerCase().includes(search.toLowerCase()))
.map((song) => (
  <SongCard key={song.id} song={song} playSong={setCurrentSong} />
))}

</div>
)}

</div>
<Player currentSong={currentSong}
songs={songs}
setCurrentSong={setCurrentSong}
/>

</div>

);

}

export default Home;