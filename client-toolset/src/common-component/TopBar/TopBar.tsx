import React from "react";

const TopBar = ({ className }: any) => {
  return (
    <div className={`${className} px-5 py-7 flex flex-row`}>
      <div className="w-1/5">My Porfolio</div>
      <div className="w-2/4">Search Bar</div>
      <div className="w-2/4 text-right">Profile</div>
    </div>
  );
};

export default TopBar;
