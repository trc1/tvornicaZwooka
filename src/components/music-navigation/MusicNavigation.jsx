import ShuffleIcon from "../../assets/icons/ShuffleIcon";
import PrevIcon from "../../assets/icons/PrevIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import NextIcon from "../../assets/icons/NextIcon";
import RepeatIcon from "../../assets/icons/RepeatIcon";
import { useState } from "react";

export default function MusicNavigation() {
  const [activeIcons, setActiveIcons] = useState([]);

  const handleIconClick = (icon) => {
    setActiveIcons((prev) =>
      prev.includes(icon)
        ? prev.filter((item) => item !== icon)
        : [...prev, icon]
    );
  };

  return (
    <nav className="music-navigation">
      <ol className="music-navigation__wrapper">
        <li
          className={
            activeIcons.includes("shuffle")
              ? "music-navigation__icon music-navigation__icon--active"
              : "music-navigation__icon"
          }
          onClick={() => handleIconClick("shuffle")}
        >
          <ShuffleIcon />
        </li>
        <li className="music-navigation__icon">
          <PrevIcon />
        </li>
        <li className="music-navigation__icon">
          <PlayIcon />
        </li>
        <li className="music-navigation__icon">
          <NextIcon />
        </li>
        <li
          className={
            activeIcons.includes("repeat")
              ? "music-navigation__icon music-navigation__icon--active"
              : "music-navigation__icon"
          }
          onClick={() => handleIconClick("repeat")}
        >
          <RepeatIcon />
        </li>
      </ol>
    </nav>
  );
}
