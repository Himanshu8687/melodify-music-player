import React from "react";
import { FaPlay} from "react-icons/fa";


function SongCard({ song, playSong }) {
  return (
    <div className="song-card" onClick={() => playSong(song)}>
      <img src={song.cover} alt={song.title} />
      <div className="play-icon"><FaPlay/></div>
      <h4>{song.title}</h4>
      <p>{song.artist}</p>
    </div>
  );
}

export default SongCard;