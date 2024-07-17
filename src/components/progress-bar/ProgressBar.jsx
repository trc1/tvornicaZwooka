import { useRef } from "react";

export default function ProgressBar({
  width,
  height,
  color,
  fill,
  cursor = "default",
  onClick,
}) {
  const progressBarRef = useRef(null);
  const fillStyles = {
    width: fill ? `${fill}%` : "84%",
    backgroundColor: color,
    cursor: cursor,
  };

  const progressBarStyles = {
    height: height ? `${height}rem` : ".5rem",
    width: width ? `${width}%` : "100%",
    cursor: cursor,
  };

  const handleClick = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newFill = (offsetX / rect.width) * 100;
    onClick(newFill);
  };

  return (
    <div
      className="progress-bar"
      style={progressBarStyles}
      onClick={handleClick}
      ref={progressBarRef}
    >
      <div className="progress-bar__fill" style={fillStyles}></div>
    </div>
  );
}
