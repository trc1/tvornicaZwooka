export default function Button({
  width,
  icon,
  label,
  className,
  onClick,
  color,
}) {
  const buttonStyles = {
    width: width ? `${width}%` : "",
    color: color,
  };
  return (
    <button
      className={`btn ${className}`}
      style={buttonStyles}
      onClick={onClick}
      type="button"
    >
      {icon && icon}
      {label && label}
    </button>
  );
}
