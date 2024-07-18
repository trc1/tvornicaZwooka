export default function Input({
  icon,
  type,
  placeholder,
  maxWidth,
  id,
  label,
  rows
}) {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-wrapper__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className="input-wrapper__container"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {icon && icon}
        {type === "textarea" ? (
          <textarea
            id={id}
            placeholder={placeholder}
            className="input-wrapper__container-field"
            rows={rows}
            style={{ resize: "none" }}
          />
        ) : (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="input-wrapper__container-field"
          />
        )}
      </div>
    </div>
  );
}
