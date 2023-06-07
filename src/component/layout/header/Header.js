import React, { useState, useEffect } from "react";
import AirBnbLogo from "../../../assets/images/LogoSmall.png";
import SearchIcon from "../../../assets/images/search.png";
import EarthIcon from "../../../assets/images/earthheader.png";
import ProfileIcon from "../../../assets/images/profile.png";
import MenuIcon from "../../../assets/images/menu.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const desiredPosition = 200; // Change this value to the desired scroll position

      setIsSticky(scrollPosition >= desiredPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`border-b ${
        isSticky ? "sticky inset-x-0 top-0" : ""
      } bg-white z-50`}
    >
      <div className="xl:px-[64px] lg:px-[64px] flex flex-row items-center p-[16px] h-[80px] justify-between">
        <div className="cursor-pointer m-4 lg:m-0 xl:m-0 justify-start">
          <img src={AirBnbLogo} alt="Airbnb" />
        </div>

        <div className="hidden lg:flex xl:flex md:flex items-center cursor-pointer m-4 lg:m-0 xl:m-0 justify-end">
          <div className="hover:bg-[#f7f7f7] hover:px-3 hover:rounded-full px-3 py-3">
            Airbnb your home
          </div>
          <div className="opacity-60 hover:bg-[#f7f7f7] hover:px-3 hover:rounded-full px-3 py-3">
            <img src={EarthIcon} alt="Global Search" />
          </div>
          <div className="opacity-60 hover:shadow-xl ml-[15px] border border-slate-200 rounded-full p-2 flex items-center">
            <img className="mx-1 w-[20px] h-[15px]" src={MenuIcon} alt="Menu" />
            <img className="mx-2" src={ProfileIcon} alt="Profile" />
          </div>
        </div>
        <div className="absolute">
          <div className="relative left-[538px] bottom-[64px] hidden cursor-pointer lg:flex xl:flex md:flex items-center hover:shadow-2xl shadow-xl border-2 rounded-full pl-4 pr-2 py-[8px]">
            <div className="border-r px-2">Anywhere</div>
            <div className="border-r px-3 mr-3">Any week</div>
            <div>16 + guests</div>
            <div className="ml-10 bg-[#FF385C] rounded-2xl p-[6px]">
              <img src={SearchIcon} alt="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
