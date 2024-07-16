import { sidebarNavigation } from "../../data/sidebar-data";
import Badge from "../badge/Badge";
import ArrowIcon from "../../assets/icons/ArrowIcon";

export default function Navigation() {
  console.log(sidebarNavigation);

  return (
    <nav className="navigation-wrapper">
      {sidebarNavigation.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className={`navigation-wrapper__item ${
              item.active ? "active" : ""
            }`}
          >
            <div className="navigation-wrapper__item-text">
              <IconComponent />
              <a className="navigation-wrapper__item-name">{item.name}</a>
            </div>
            <div className="navigation-wrapper__item-notifications">
              {item.notification && (
                <Badge label={item.notification} className="badge-xs-primary" />
              )}
              {item.dropdown && <ArrowIcon />}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
