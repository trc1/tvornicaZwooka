export default function Button({ width, icon, label, className }) {
  return (
    <button
      className={`btn ${className}`}
      style={width ? { width: `${width}%` } : {}}
    >
      {icon && icon}
      {label && label}
    </button>
  );
}
