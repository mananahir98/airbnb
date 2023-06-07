import StarIcon from "../../../assets/images/star.png";
import DefaultHome from "../../../assets/images/Airbnb.jpg";

const CardContainer = ({ data, key }) => {
  return (
    <div className="p-3 cursor-pointer" key={key}>
      <img
        className="rounded-xl h-[275px] w-[500px] object-cover"
        src={data?.xl_picture_url ? data?.xl_picture_url : DefaultHome}
        onError={(e) => (e.target.src = DefaultHome)}
        alt="BnB Data"
      />
      <div className="relative">
        <div className="absolute bottom-[17px] left-[17px]">
          <div className="cursor-pointer h-[85px] w-[65px] bg-[#ECECEC] rounded-r-xl flex items-center justify-center">
            <img
              className="rounded-full h-[45px] w-[45px] object-cover"
              src={
                data?.host_picture_url ? data?.host_picture_url : DefaultHome
              }
              onError={(e) => (e.target.src = DefaultHome)}
              alt="Host profile"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-[17px] left-[22px]">
          <div className="w-[1px] h-[85px] bg-gray-600" />
        </div>
      </div>
      <div className="text-[15px] mt-[13px]">
        <div className="flex justify-between">
          <div className="font-medium">{data?.smart_location}</div>
          <div className="flex items-center">
            <img
              className="h-[12px] w-[12px] mr-[3px]"
              src={StarIcon}
              alt="star"
            />
            {data?.number_of_reviews}
          </div>
        </div>
        <div className="text-[15px] text-[#717171]">{data?.name}</div>
        <div className="text-[15px] text-[#717171]">20-27 May</div>
        <div className="font-medium">
          <span className="font-semibold">${data?.price}</span> night
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
