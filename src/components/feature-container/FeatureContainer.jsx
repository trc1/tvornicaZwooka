export default function FeatureContainer({
  image,
  title,
  description,
  playlistCover,
}) {
  return (
    <section
      className="feature-container"
      style={{ background: `url(${image}) no-repeat center center / cover` }}
      aria-label={`Feature: ${title}`}
    >
      <figure className="feature-container__image">
        <img src={playlistCover} alt={`${title} playlist cover`} />
      </figure>

      <div className="feature-container__info-wrapper">
        <h2 className="feature-container__subtitle">Playlist</h2>
        <h1 className="feature-container__title">{title}</h1>
        <p className="feature-container__description">{description}</p>
      </div>
    </section>
  );
}
