import { Link } from "react-router-dom";
import { MenuItem, SectionMenu } from "../../models/Menu";

const renderMenuItemComponent = (menuItem: MenuItem, id: string) => {
  if (menuItem.linkable) {
    return (
      <Link id={id} key={id} to={`${menuItem?.linkURL || ""}`}>
        <li
          id={id}
          className={`border-l-2 px-6 py-1 hover:bg-blue-500 hover:text-primary-text-lighter text-primary-text-light flex`}
        >
          {menuItem.iconComponent} {menuItem.title}
        </li>
      </Link>
    );
  }

  return (
    <li
      id={id}
      className={`border-l-2 px-6 py-1 hover:bg-blue-500 hover:text-primary-text-lighter text-primary-text-light flex`}
    >
      {menuItem.iconComponent} {menuItem.title}
    </li>
  );
};

const renderSection = (sectionItem: SectionMenu, index: string) => (
  <div id={index} key={index} className="pt-4">
    <h1 className="py-3 text-primary-text-dark font-bold font-sans">
      {sectionItem.title}
    </h1>
    {sectionItem?.listItems?.map((menuItem: MenuItem, indexList: number) =>
      renderMenuItemComponent(menuItem, indexList.toString())
    )}
  </div>
);

const MenuBar = ({ className, items }: any) => {
  return (
    <div className={`${className} px-2 w-1/6 min-h-full border-r z-0`}>
      {items.map((element: SectionMenu, index: number) =>
        renderSection(element, index.toString())
      )}
    </div>
  );
};

export default MenuBar;
