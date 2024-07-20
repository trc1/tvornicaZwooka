import Badge from "../badge/Badge";
import ArrowIcon from "../../assets/icons/ArrowIcon";

export default function NavigationItem({
  name,
  notification,
  subnavigation,
  index,
  active,
  handleItemClick,
  IconComponent,
}) {
  return (
    <li
      className={`navigation-item ${index === active ? "active" : ""}`}
      onClick={() => handleItemClick(index)}
    >
      <div className="navigation-item__text-wrapper">
        <IconComponent />
        <p className="navigation-item__name">{name}</p>
      </div>
      <div className="navigation-item__notifications">
        {notification && (
          <Badge label={notification} className="badge-xs-primary" />
        )}
        {subnavigation && index === active && <ArrowIcon />}
      </div>
    </li>
  );
}
