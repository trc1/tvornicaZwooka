export default function Button({ width, icon, label, className, onClick }) {
  return (
    <button
      className={`btn ${className}`}
      style={width ? { width: `${width}%` } : {}}
      onClick={onClick}
      type="button"
    >
      {icon && icon}
      {label && label}
    </button>
  );
}
