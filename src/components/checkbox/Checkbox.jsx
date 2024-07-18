import Check from "../../assets/icons/Check";

export default function Checkbox({ label, id }) {
  return (
    <div className="checkbox-wrapper">
      <div className="checkbox-wrapper__container">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="checkbox-wrapper__container-checkbox"
        />
        <Check className="checkbox-wrapper__container-checkbox-icon" />
      </div>
      <label htmlFor={id} className="checkbox-wrapper__label">
        {label}
      </label>
    </div>
  );
}
