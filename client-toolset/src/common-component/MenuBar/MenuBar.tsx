import { MenuItem, SectionMenu } from "../../models/Menu";

const MenuItemComponent = ({ title, IconComponent }: any) => (
  <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
    <IconComponent /> - {title}
  </li>
);

const renderSection = (sectionItem : SectionMenu) => (
  <div className="pt-4">
    <h1 className="py-3 px-3 text-gray-300">{sectionItem.title}</h1>
    {sectionItem?.listItems?.map((item: MenuItem) => (
      <MenuItemComponent title={item.title} IconComponent={item.icon} />
    ))}
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
