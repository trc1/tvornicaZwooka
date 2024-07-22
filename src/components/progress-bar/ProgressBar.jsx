import { useRef, useState } from "react";

export default function ProgressBar({
  width,
  height,
  color,
  fill,
  cursor = "default",
  changeVolume,
}) {
  const progressBarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

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

  const updateFill = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newFill = (offsetX / rect.width) * 100;

    const fill = Math.min(Math.max(newFill, 0), 100);
    changeVolume(fill);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateFill(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateFill(e);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="progress-bar"
      style={progressBarStyles}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
      ref={progressBarRef}
    >
      <div className="progress-bar__fill" style={fillStyles}></div>
    </div>
  );
}
