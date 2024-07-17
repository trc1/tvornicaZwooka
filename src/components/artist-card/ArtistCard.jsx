export default function ArtistCard({ image, songName, artist }) {
  return (
    <div className="artist-card">
      <img
        src={image}
        alt="Current song image"
        className="artist-card__image"
      />
      <div className="artist-card__text">
        <div className="artist-card__text-name">{songName}</div>
        <div className="artist-card__text-artist">{artist}</div>
      </div>
    </div>
  );
}
