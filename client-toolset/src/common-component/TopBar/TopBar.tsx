import Input from "../Input/Input";
import { MagnifyGlass, Bars, Bell } from "../icons";

const handleSearchChange = (value: any) => {
  console.log(value);
};

const TopBar = ({ className, toggleMenuHandler }: any) => {
  let searchValue = "";
  return (
    <div
      className={`${className} max-w-full flex flex-row justify-left py-4 z-10`}
    >
      <div className="basis-2/12 flex flex-row self-center items-stretch gap-4 pl-3">
        <Bars className="cursor-pointer w-8 h-8 fill-primary-text-lighter" onClick={toggleMenuHandler} />
        <p className="font-bold subpixel-antialiased text-2xl/7">MyPortfolio</p>
      </div>
      <div className="basis-6/12 pl-3 self-center">
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          placeHolder="Search everything ..."
          className=""
          IconComponent={MagnifyGlass}
          iconColor="fill-primary-400"
        />
      </div>
      <div className="basis-4/12 flex justify-end self-center gap-5 px-4">
        <div className="cursor-pointer relative">
          <p className="animate-ping absolute top-[-5px] right-0 text-xs w-4 h-4 text-center rounded-full bg-primary-red text-primary-content font-bold">1</p>
          <Bell className=" w-7 h-7 fill-primary-text-light" />
        </div>
        <div>
          <p className="cursor-pointer font-medium subpixel-antialiased text-base">
            my Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
