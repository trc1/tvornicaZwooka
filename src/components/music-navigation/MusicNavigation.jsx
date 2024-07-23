import ShuffleIcon from "../../assets/icons/ShuffleIcon";
import PrevIcon from "../../assets/icons/PrevIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import NextIcon from "../../assets/icons/NextIcon";
import RepeatIcon from "../../assets/icons/RepeatIcon";
import { useState } from "react";

export default function MusicNavigation() {
  const [activeIcons, setActiveIcons] = useState(["shuffle"]);

  const handleIconClick = (icon) => {
    setActiveIcons((prev) =>
      prev.includes(icon)
        ? prev.filter((item) => item !== icon)
        : [...prev, icon]
    );
  };

  return (
    <nav className="music-navigation" aria-label="Music player controls">
      <ol className="music-navigation__wrapper" role="list">
        <li
          className={
            activeIcons.includes("shuffle")
              ? "music-navigation__icon music-navigation__icon--active"
              : "music-navigation__icon"
          }
          role="button"
          aria-pressed={activeIcons.includes("shuffle")}
          aria-label="Shuffle"
          onClick={() => handleIconClick("shuffle")}
          tabIndex="0"
        >
          <ShuffleIcon />
        </li>
        <li
          className="music-navigation__icon"
          role="button"
          aria-label="Previous"
          tabIndex="0"
        >
          <PrevIcon />
        </li>
        <li
          className="music-navigation__icon"
          role="button"
          aria-label="Play/Pause"
          tabIndex="0"
        >
          <PlayIcon />
        </li>
        <li
          className="music-navigation__icon"
          role="button"
          aria-label="Next"
          tabIndex="0"
        >
          <NextIcon />
        </li>
        <li
          className={
            activeIcons.includes("repeat")
              ? "music-navigation__icon music-navigation__icon--active"
              : "music-navigation__icon"
          }
          role="button"
          aria-pressed={activeIcons.includes("repeat")}
          aria-label="Repeat"
          onClick={() => handleIconClick("repeat")}
          tabIndex="0"
        >
          <RepeatIcon />
        </li>
      </ol>
    </nav>
  );
}
