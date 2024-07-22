export default function TitleCell({ image, artist, song, album }) {
  return (
    <div className="title-cell">
      <img
        src={image}
        alt={`Album cover for ${album}`}
        className="title-cell__image"
      />
      <div className="title-cell__text-wrapper">
        <h4 className="title-cell__name">{song}</h4>
        <p className="title-cell__email">{artist}</p>
      </div>
    </div>
  );
}
