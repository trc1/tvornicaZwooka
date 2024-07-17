import { useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import SoundIcon from "../../assets/icons/SoundIcon";
import { playlist } from "../../data/playlist-data";
import ArtistCard from "../artist-card/ArtistCard";
import Timeline from "../timeline/Timeline";
import MusicNavigation from "../music-navigation/MusicNavigation";

export default function MusicControl() {
  const [volume, setVolume] = useState(50); // Initial volume set to 50%

  const currentSong = playlist[0];

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  return (
    <div className="music-control">
      <div className="music-control__current-playing">
        <ArtistCard
          image={currentSong.image}
          artist={currentSong.artist}
          songName={currentSong.songName}
        />
      </div>
      <div className="music-control__navigation">
        <MusicNavigation />
        <Timeline duration={currentSong.duration} />
      </div>
      <div className="music-control__volume">
        <SoundIcon />
        <ProgressBar
          width={100}
          height={0.1875}
          color="var(--text-primary)"
          cursor="pointer"
          fill={volume}
          onClick={handleVolumeChange}
        />
      </div>
    </div>
  );
}
