import { Link } from "react-router-dom";
import { MenuItem, SectionMenu } from "../../models/Menu";

const renderMenuItemComponent = (menuItem: MenuItem) => {
  if (menuItem.linkable) {
    return (
      <Link to={`${menuItem?.linkURL || ""}`}>
        <li
          className={`border-l-2 px-6 py-1 hover:bg-blue-500 hover:text-primary-text-lighter text-primary-text-light flex`}
        >
          {menuItem.iconComponent} {menuItem.title}
        </li>
      </Link>
    );
  }

  return (
    <li className={`border-l-2 px-6 py-1 hover:bg-blue-500 hover:text-primary-text-lighter text-primary-text-light flex`}>
      {menuItem.iconComponent} {menuItem.title}
    </li>
  );
};

const renderSection = (sectionItem: SectionMenu) => (
  <div className="pt-4">
    <h1 className="py-3 text-primary-text-dark font-bold font-sans">
      {sectionItem.title}
    </h1>
    {sectionItem?.listItems?.map((menuItem: MenuItem) =>
      renderMenuItemComponent(menuItem)
    )}
  </div>
);

const MenuBar = ({ className, items }: any) => {
  return (
    <div className={`${className} px-2`}>
      {items.map((element: SectionMenu) => renderSection(element))}
    </div>
  );
};

export default MenuBar;
