import PodcastTag from "../podcast-tag/PodcastTag";
import Badge from "../badge/Badge";

export default function PodcastCard({ title, image, badge, status }) {
  return (
    <div
      className="podcast-card"
      style={{ background: `url(${image}) no-repeat center center / cover` }}
    >
      <PodcastTag status={status} />
      <div className="podcast-card__overlay"></div>
      <div className="podcast-card__wrapper">
        <h3 className="podcast-card__title">{title}</h3>
        {badge && <Badge label="Premium" className="badge-xs-brand" />}
      </div>
    </div>
  );
}
