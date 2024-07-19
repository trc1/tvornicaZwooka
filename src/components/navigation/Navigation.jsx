import { useState } from "react";
import { sidebarNavigation } from "../../data/sidebar-data";
import Badge from "../badge/Badge";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import Subnavigation from "../subnavigation/Subnavigation";
import { Link } from "react-router-dom";

export default function Navigation() {
  const initialActive = sidebarNavigation.findIndex((item) => item.active);
  const [active, setActive] = useState(initialActive);

  const handleItemClick = (index) => {
    setActive(index);
  };
  return (
    <ul className="navigation-wrapper">
      {sidebarNavigation.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="navigation-wrapper__list">
            <Link to={item.href} replace>
              <li
                className={`navigation-wrapper__item ${
                  index === active ? "active" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="navigation-wrapper__item-text">
                  <IconComponent />
                  <p className="navigation-wrapper__item-name">{item.name}</p>
                </div>
                <div className="navigation-wrapper__item-notifications">
                  {item.notification && (
                    <Badge
                      label={item.notification}
                      className="badge-xs-primary"
                    />
                  )}
                  {item.subnavigation && index === active && <ArrowIcon />}
                </div>
              </li>
            </Link>
            {item.subnavigation && index === active && (
              <Subnavigation value={item.subnavigation} />
            )}
          </div>
        );
      })}
    </ul>
  );
}
