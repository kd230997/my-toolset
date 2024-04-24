import { Icon } from "..";

const MenuBar = ({ className }: any) => {
  return (
    <div className={`${className} px-2`}>
      <div className="pt-4">
        <h1 className="py-3 px-3 text-gray-300">Main Menu</h1>
        <ul>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.FourSquare /> Dashboard
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.ComputerDesktop /> Car Rent
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.ChartBarSquare /> Insight
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.CreditCard /> Reimburse
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.ChatBubble /> Inbox
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.Calendar /> Calendar
          </li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="py-3 px-3 text-gray-300">Preferences</h1>
        <ul>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.Cog /> Settings
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.InformationCircle /> Help & Center
          </li>
          <li className="px-2 py-3 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
            <Icon.Briefcase /> Dark Mode
          </li>
        </ul>
      </div>

      <p className="mt-7 py-3 px-2 hover:bg-blue-500 hover:rounded-md hover:text-white text-gray-400 flex">
        <Icon.Logout /> Logout
      </p>
    </div>
  );
};

export default MenuBar;
