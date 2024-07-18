export default function FeatureContainer({
  image,
  title,
  description,
  playlistCover,
}) {
  return (
    <div
      className="feature-container"
      style={{ background: `url(${image}) no-repeat center center / cover` }}
    >
      <img
        src={playlistCover}
        alt={`Image of ${title} playlist.`}
        className="feature-container__image"
      />
      <div className="feature-container__info">
        <p className="feature-container__info-description">Playlist</p>
        <h1 className="feature-container__info-title">{title}</h1>
        <p className="feature-container__info-description">{description}</p>
      </div>
    </div>
  );
}
