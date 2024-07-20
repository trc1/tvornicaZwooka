import ArrowDiagonalIcon from "../../assets/icons/ArrowDiagonalIcon";

export default function FeatureCard({ data }) {
  return (
    <div
      className="feature-card"
      style={{
        background: `url(${data.image}) no-repeat center center / cover`,
      }}
    >
      <div className="feature-card__icon">
        <ArrowDiagonalIcon />
      </div>
      <div className="feature-card__info-wrapper">
        <h2 className="feature-card__title">{data.title}</h2>
        <p className="feature-card__description">{data.description}</p>
      </div>
    </div>
  );
}
