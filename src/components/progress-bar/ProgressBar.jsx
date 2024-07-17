import React from "react";

export default function ProgressBar({ width, height, color, fill }) {
  const fillStyles = {
    width: fill ? `${fill}%` : "84%",
    backgroundColor: color,
  };

  const progressBarStyles = {
    height: height ? `${height}rem` : ".5rem",
    width: width ? `${width}%` : "100%",
  };

  return (
    <div className="progress-bar" style={progressBarStyles}>
      <div className="progress-bar__fill" style={fillStyles}></div>
    </div>
  );
}
