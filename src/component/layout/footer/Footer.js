import EarthIcon from "../../../assets/images/earthheader.png";
import { FOOTER_LINK } from "../../../utils/constant";

const Footer = () => {
  return (
    <div className="bg-[#EBEBEB] text-black text-center border-t-2 fixed inset-x-0 bottom-0">
      <div className="px-[40px] py-[14px] flex flex-col lg:flex-row xl:flex-row justify-center xl:justify-between lg:justify-between items-center">
        <div className="cursor-pointer flex items-center">
          {FOOTER_LINK.map((value, key) => (
            <div
              className="mx-2 text-[14px] text-[#222222] font-light"
              key={key}
            >
              {value.title}
            </div>
          ))}
        </div>

        <div className="flex items-center cursor-pointer m-4 lg:m-0 xl:m-0 font-[500]">
          <div>
            <img src={EarthIcon} alt="Global Search" />
          </div>
          <div className="mx-2">English (IN)</div>
          <div className="mx-2">$ INR</div>
          <div className="mx-2">Support & resources</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
