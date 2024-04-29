import Input from "../Input/Input";
import { MagnifyGlass, Bars, Bell } from "../icons";

const handleSearchChange = (value: any) => {
  console.log(value);
};

const TopBar = ({ className }: any) => {
  let searchValue = "";
  return (
    <div
      className={`${className} max-w-full flex flex-row justify-left py-4 z-10`}
    >
      <div className="basis-2/12 flex flex-row px-5 py-2 gap-4">
        <Bars className="cursor-pointer w-8 h-8 px-1 fill-primary-text-lighter" />
        <p className="font-bold subpixel-antialiased text-2xl/7">MyPortfolio</p>
      </div>
      <div className="basis-6/12 pl-3 mt-2">
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          placeHolder="Search everything ..."
          className="p-2"
          IconComponent={MagnifyGlass}
          iconColor="fill-primary-400"
        />
      </div>
      <div className="basis-4/12 flex justify-end py-2 gap-5 px-4">
        <div>
          <Bell className="w-8 h-8 fill-primary-text-light" />
        </div>
        <div>
          <p className="font-medium subpixel-antialiased text-lgsm/7">
            my profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
