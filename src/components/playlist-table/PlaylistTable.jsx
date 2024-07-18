import { playlist } from "../../data/playlist-data";

export default function PlaylistTable() {
    const item = playlist[0]
  return (
    <table className="playlist-table" role="table" aria-label="Playlist Table">
      <thead>
        <tr className="playlist-table__header-row" role="row">
          <th className="playlist-table__header-cell" role="columnheader">#</th>
          <th className="playlist-table__header-cell" role="columnheader">Title</th>
          <th className="playlist-table__header-cell" role="columnheader">Album</th>
          <th className="playlist-table__header-cell" role="columnheader">Date Added</th>
          <th className="playlist-table__header-cell" role="columnheader">Song Time</th>
        </tr>
      </thead>
      <tbody>
        {playlist.map((item) => (
          <tr key={item.id} className="playlist-table__row" role="row">
            <td className="playlist-table__cell" role="cell">{item.id}</td>
            <td className="playlist-table__cell" role="cell">{item.title}</td>
            <td className="playlist-table__cell" role="cell">{item.album}</td>
            <td className="playlist-table__cell" role="cell">{item.dateAdded}</td>
            <td className="playlist-table__cell" role="cell">{item.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
