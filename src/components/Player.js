import React, { useRef, useEffect ,useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";

function Player({ currentSong, songs, setCurrentSong }) {
const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

useEffect(() => {
if (audioRef.current) {
audioRef.current.play().catch(() => {
});
setIsPlaying(true);
}
}, [currentSong]);

if (!currentSong) return null;



const currentIndex = songs.findIndex(song => song.id === currentSong.id);



const nextSong = () => {
if (currentIndex < songs.length - 1) {
setCurrentSong(songs[currentIndex + 1]);
}
};

const prevSong = () => {
if (currentIndex > 0) {
setCurrentSong(songs[currentIndex - 1]);
}
};

const playSong = () => {
audioRef.current.play()
setIsPlaying(true);
};

const pauseSong = () => {
audioRef.current.pause();
setIsPlaying(false);
};

const changeVolume = (e) => {
audioRef.current.volume = e.target.value;
};

return (




<div className="player">

{/* LEFT  */}
<div className="player-left">

<img src={currentSong.cover} alt="song"/>

<div>
<h4>{currentSong.title}</h4>
<p>{currentSong.artist}</p>
</div>

</div>


{/* CENTER Area */}
<div className="player-center">

<div className="controls">

<button onClick={prevSong}>
<FaBackward/>
</button>

<button onClick={isPlaying ? pauseSong : playSong}>
{isPlaying ? <FaPause/> : <FaPlay/>}
</button>


<button onClick={nextSong}>
<FaForward/>
</button>

</div>
<div className="timer"> 
  <input
  type="range"
  min="0"
  max={duration}
  value={currentTime}
  onChange={(e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  }}
/>
{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
</div>

<audio 
key={currentSong.id}
ref={audioRef} 
src={currentSong.audio}
autoplay
onTimeUpdate={() =>
  setCurrentTime(audioRef.current.currentTime)}
  onLoadedData={() =>
    setDuration(audioRef.current.duration)
  
}/>

</div>


{/* RIGHT - Volume option */}
<div className="player-right">

<FaVolumeUp/>

<input
className="volume"
type="range"
min="0"
max="1"
step="0.01"
defaultValue="1"
onChange={changeVolume}
/>

</div>

</div>

);

}

export default Player;