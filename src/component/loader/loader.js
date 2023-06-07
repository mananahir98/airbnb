const Loader = ({ key }) => {
  return (
    <div className="p-3" key={key}>
      <div className="animate-pulse">
        <div className="rounded-xl h-[275px] w-auto object-cover bg-[#EBEBEB]"></div>
        <div className="py-3">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-4 bg-[#EBEBEB] rounded col-span-3 mb-2"></div>
            <div className="h-4 bg-[#EBEBEB] rounded col-span-1"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 w-[180px] bg-[#EBEBEB] rounded mb-2"></div>
            <div className="h-4 w-[100px] bg-[#EBEBEB] rounded"></div>
            <div className="h-4 w-[55px] bg-[#EBEBEB] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
