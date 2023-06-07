import React from "react";
import AdvertiseIcon from "../../assets/images/advertise.png";

const Advertisement = () => {
  return (
    <div className="border-b">
      <div className="px-[64px] py-[15px] flex justify-between bg-[#F7F7F7]">
        <div className="font-medium text-[18px]">Rooms and 50+ features</div>
        <div className="font-light text-gray-700 text-[15px] flex items-center items-center">
          <span>
            <img
              className="w-[50px] rounded-md"
              src={AdvertiseIcon}
              alt="Advertisement"
            />
          </span>
          <span className="mx-2 border-r px-2 border-slate-300">
            Play the Rooms film
          </span>
          <span>Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
