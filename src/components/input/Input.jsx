export default function Input({ icon, type, placeholder, maxWidth }) {
  return (
    <div className="input-container" style={{ maxWidth: `${maxWidth}px` }}>
      {icon ?? icon}
      <input type={type} placeholder={placeholder} className="input-field" />
    </div>
  );
}
