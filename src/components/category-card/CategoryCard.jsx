import React from "react";

export default function CategoryCard({ image, title }) {
  return (
    <>
      <figure className="category-card">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="category-card__image"
        />
        <figcaption className="category-card__title">{title}</figcaption>
      </figure>
    </>
  );
}
