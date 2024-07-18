import FeatureContainer from "../components/feature-container/FeatureContainer";
import { feature } from "../data/feature-data";
export default function Album() {
  const data = feature[0];
  return (
    <div className="album-content">
      <FeatureContainer
        image={data.image}
        title={data.title}
        description={data.description}
        playlistCover={data.playlistCover}
      />
    </div>
  );
}
