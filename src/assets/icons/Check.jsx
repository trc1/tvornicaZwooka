import React from "react";

export default function Check({className}) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.75 1.24966L3.71933 8.436C3.65296 8.53137 3.56487 8.60961 3.46233 8.66426C3.35978 8.71892 3.24572 8.74842 3.12953 8.75034C3.01335 8.75226 2.89837 8.72654 2.79408 8.67531C2.68978 8.62408 2.59916 8.54879 2.52967 8.45566L1.25 6.74966"
        stroke="var(--text-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
