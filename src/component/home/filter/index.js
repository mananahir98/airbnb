import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-between px-[32px] py-[25px] border-2 rounded-2xl gap-[155px] items-center">
          <div className="flex items-center">
            <div className="px-2 border-r text-[15px] font-[600]">
              Display total price
            </div>
            <div className="px-2 text-[15px] font-[400] text-[#717171]">
              Includes all fees, before taxes
            </div>
          </div>
          <div>
            <label class="relative items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-[60px] h-[32px] bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[30px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
