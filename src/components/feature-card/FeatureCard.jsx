import ArrowDiagonalIcon from "../../assets/icons/ArrowDiagonalIcon";

export default function FeatureCard({ image, title, description }) {
  return (
    <div className="feature-card" style={{ background: `url(${image})` }}>
      <div className="feature-card__icon">
        <ArrowDiagonalIcon />
      </div>
      <div className="feature-card__info">
        <h2 className="feature-card__info-title">{title}</h2>
        <p className="feature-card__info-description">{description}</p>
      </div>
    </div>
  );
}
