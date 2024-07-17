import { sidebarNavigation } from "../../data/sidebar-data";
import Badge from "../badge/Badge";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useState } from "react";
import Subnavigation from "../subnavigation/Subnavigation";

export default function Navigation() {
  const initialActive = sidebarNavigation.findIndex((item) => item.active);
  const [active, setActive] = useState(initialActive);

  const handleItemClick = (index) => {
    setActive(index);
  };
  return (
    <div className="navigation-wrapper">
      {sidebarNavigation.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <ul className="navigation-wrapper__list">
            <li
              key={index}
              className={`navigation-wrapper__item ${
                index === active ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="navigation-wrapper__item-text">
                <IconComponent />
                <a className="navigation-wrapper__item-name">{item.name}</a>
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
            {item.subnavigation && index === active && (
              <Subnavigation value={item.subnavigation} />
            )}
          </ul>
        );
      })}
    </div>
  );
}
