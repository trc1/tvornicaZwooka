import ArrowIcon from "../../assets/icons/ArrowIcon";
import avatar from "../../assets/images/avatar.png";

export default function Profile() {
  return (
    <div className="user-container">
      <div className="user-container__image-wrapper">
        <img
          src={avatar}
          alt="Avatar image"
          className="user-container__image"
        />
        <span className="user-container__status"></span>
      </div>
      <div className="user-container__text-wrapper">
        <h4 className="user-container__name">Albert Flores</h4>
        <p className="user-container__email">albert@flores.com</p>
      </div>
      <ArrowIcon />
    </div>
  );
}
