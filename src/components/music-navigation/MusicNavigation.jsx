import ShuffleIcon from "../../assets/icons/ShuffleIcon";
import PrevIcon from "../../assets/icons/PrevIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import NextIcon from "../../assets/icons/NextIcon";
import RepeatIcon from "../../assets/icons/RepeatIcon";

export default function MusicNavigation() {
  return (
    <nav className="music-navigation">
      <ol className="music-navigation__wrapper">
        <li className="music-navigation__icon music-navigation__icon--active">
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
        <li className="music-navigation__icon">
          <RepeatIcon />
        </li>
      </ol>
    </nav>
  );
}
