import SearchIcon from "../../assets/icons/SearchIcon";
import GreaphNeutralIcon from "../../assets/icons/GraphNeutralIcon";
import BellIcon from "../../assets/icons/BellIcon";
import Button from "../button/Button";
import Input from "../input/Input";
import Profile from "../profile/Profile";
import MenuIcon from "../../assets/icons/MenuIcon";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <header className="header">
      <div className="header__left">
        <Input
          icon={<SearchIcon />}
          placeholder="Search anything here"
          type="search"
          maxWidth={320}
        />
      </div>
      <div className="header__right">
        <div className="header__button-wrapper">
          <Button
            className="btn-icon menu-icon"
            icon={<MenuIcon />}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Button className="btn-icon" icon={<GreaphNeutralIcon />} />
          <Button className="btn-icon" icon={<BellIcon />} />
        </div>
        <Profile />
      </div>
    </header>
  );
}
