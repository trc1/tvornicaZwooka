import StarIcon from "../../assets/icons/StarIcon";
import Button from "../button/Button";

export default function Premium() {
  return (
    <aside className="premium-container">
      <header className="premium-container__header">
        <div className="premium-container__header-icon">
          <StarIcon />
        </div>
        <h3 className="premium-container__title">Update Premium</h3>
      </header>
      <p className="premium-container__description">
        Your Premium account is coming to an end. Please update your credit card
        information.
      </p>
      <div className="premium-container__progress-bar-container">
        <div className="progress-bar"></div>
      </div>
      <div className="premium-container__buttons-container">
        <Button className="btn-small" label="Dismiss" />
        <Button
          className="btn-small"
          label="Upgrade Plan"
          color="var(--text-warning)"
        />
      </div>
    </aside>
  );
}