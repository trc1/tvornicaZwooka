import { playlist } from "../../data/playlist-data";
import TitleCell from "../title-cell/TitleCell";

export default function PlaylistTable() {
  return (
    <table className="playlist-table" role="table" aria-label="Playlist Table">
      <thead className="playlist-table__header">
        <tr className="playlist-table__row" role="row">
          <th className="playlist-table__cell" role="columnheader">
            #
          </th>
          <th className="playlist-table__cell" role="columnheader">
            Title
          </th>
          <th className="playlist-table__cell" role="columnheader">
            Album
          </th>
          <th className="playlist-table__cell" role="columnheader">
            Date Added
          </th>
          <th className="playlist-table__cell" role="columnheader">
            Song Time
          </th>
        </tr>
      </thead>
      <tbody className="playlist-table__body">
        {playlist.map((item) => (
          <tr key={item.id} className="playlist-table__row" role="row">
            <td className="playlist-table__cell" role="cell">
              {item.id}
            </td>
            <td className="playlist-table__cell" role="cell">
              <TitleCell
                image={item.image}
                song={item.songName}
                artist={item.artist}
                album={item.album}
              />
            </td>
            <td className="playlist-table__cell" role="cell">
              {item.album}
            </td>
            <td className="playlist-table__cell" role="cell">
              {item.dateAdded}
            </td>
            <td className="playlist-table__cell" role="cell">
              {item.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
