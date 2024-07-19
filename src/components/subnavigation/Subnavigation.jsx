import React from "react";

export default function Subnavigation({ value }) {
  return (
    <ul className="subnavigation-wrapper">
      {Array.from({ length: value }).map(() => (
        <li key={value + Math.random()} className="subnavigation-wrapper__item">
          <span className="subnavigation-wrapper__item-dot"></span>Subnavigation
        </li>
      ))}
    </ul>
  );
}
