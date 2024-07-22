import StarIcon from "../../assets/icons/StarIcon";
import Button from "../button/Button";
import ProgressBar from "../progress-bar/ProgressBar";

export default function Premium() {
  return (
    <aside className="premium-container">
      <header className="premium-container__header">
        <div className="premium-container__icon">
          <StarIcon />
        </div>
        <h3 className="premium-container__title">Update Premium</h3>
      </header>
      <p className="premium-container__description">
        Your Premium account is coming to an end. Please update your credit card
        information.
      </p>
      <ProgressBar />
      <div className="premium-container__buttons-container">
        <Button className="btn-small-text" label="Dismiss" />
        <Button
          className="btn-small-text"
          label="Upgrade Plan"
          color="var(--text-warning)"
        />
      </div>
    </aside>
  );
}
