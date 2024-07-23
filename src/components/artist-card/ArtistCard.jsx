export default function ArtistCard({ image, songName, artist }) {
  return (
    <div className="artist-card">
      <img
        src={image}
        alt={`Current song image for ${songName}`}
        className="artist-card__image"
      />
      <div className="artist-card__text-wrapper">
        <div className="artist-card__name">{songName}</div>
        <div className="artist-card__artist">{artist}</div>
      </div>
    </div>
  );
}
