export default function PodcastTag({ status = "online" }) {
  let color = "var(--surface-success)";
  let label = "Online";

  if (status.toLowerCase() === "offline") {
    label = "Offline";
    color = "var(--surface-error)";
  }

  return (
    <div className="podcast-tag">
      <div
        className="podcast-tag__icon"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className="podcast-tag__text" style={{ color: `${color}` }}>
        {label}
      </div>
    </div>
  );
}
