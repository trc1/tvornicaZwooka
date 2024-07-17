import ProgressBar from "../progress-bar/ProgressBar";

export default function Timeline({ duration, currentTime = "0:34" }) {
  return (
    <div className="timeline">
      <span className="timeline__current-time">{currentTime}</span>
      <ProgressBar
        width={100}
        fill={20}
        height={0.1875}
        color="var(--text-primary)"
      />
      <span className="timeline__duration">{duration}</span>
    </div>
  );
}
