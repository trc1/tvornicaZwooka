import HouseIcon from "../assets/icons/HouseIcon";
import LaptopIcon from "../assets/icons/LaptopIcon";
import FlashIcon from "../assets/icons/FlashIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import MusicNoteIcon from "../assets/icons/MusicNoteIcon";
import VinylIcon from "../assets/icons/VinylIcon";
import UserNoteIcon from "../assets/icons/UserNoteIcon";
import MicrophoneIcon from "../assets/icons/MicrophoneIcon";
import StationIcon from "../assets/icons/StationIcon";

export const sidebarNavigation = [
  {
    name: "Home",
    icon: HouseIcon,
    active: true,
    dropdown: false,
    href: "/",
  },
  {
    name: "Devices",
    icon: LaptopIcon,
    notification: 10,
    subnavigation: 10,
    active: false,
    dropdown: false,
  },
  {
    name: "Subscription",
    icon: FlashIcon,
    active: false,
    dropdown: false,
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    active: false,
    dropdown: false,
  },
  {
    name: "Playlist",
    icon: MusicNoteIcon,
    active: false,
    dropdown: false,
  },
  {
    name: "Albums",
    icon: VinylIcon,
    active: false,
    dropdown: false,
    href: "/album",
  },
  {
    name: "Artist",
    icon: UserNoteIcon,
    active: false,
    dropdown: false,
  },
  {
    name: "Stations",
    icon: StationIcon,
    active: false,
    dropdown: false,
  },
  {
    name: "Podcasts",
    icon: MicrophoneIcon,
    notification: "Add New",
    active: false,
    dropdown: false,
    href: "/podcast",
  },
];
