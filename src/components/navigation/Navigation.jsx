import { useState } from "react";
import { sidebarNavigation } from "../../data/sidebar-data";
import Subnavigation from "../subnavigation/Subnavigation";
import { Link } from "react-router-dom";
import NavigationItem from "../navigation-item/NavigationItem";

export default function Navigation() {
  const initialActive = sidebarNavigation.findIndex((item) => item.active);
  const [active, setActive] = useState(initialActive);

  const handleItemClick = (index) => {
    setActive(index);
  };
  return (
    <nav className="navigation" role="navigation">
      <ul className="navigation-wrapper" role="menubar">
        {sidebarNavigation.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="navigation-wrapper__list">
              <Link to={item.href} replace role="menuitem">
                <NavigationItem
                  name={item.name}
                  notification={item.notification}
                  subnavigation={item.subnavigation}
                  index={index}
                  active={active}
                  handleItemClick={handleItemClick}
                  IconComponent={IconComponent}
                />
              </Link>
              {item.subnavigation && index === active && (
                <Subnavigation value={item.subnavigation} />
              )}
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
