export default function Input({ icon, type, placeholder }) {
  return (
    <div className="input-container">
      {icon ?? icon}
      <input type={type} placeholder={placeholder} className="input-field"/>
    </div>
  );
}
