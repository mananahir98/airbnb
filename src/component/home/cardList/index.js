import { useEffect, useState } from "react";
import Loader from "../../loader/loader";
import CardContainer from "../cardContainer";

const CardList = () => {
  const [bnbData, setBnBData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(30);
  const [rows, setRows] = useState(10);

  useEffect(() => {}, []);

  useEffect(() => {
    getBnBData();
  }, [page]);

  const getBnBData = async () => {
    setLoader(true);
    fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${rows}&start=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setBnBData([...bnbData, ...data.records]);
          setLoader(false);
        }, 1000);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-[0px] xl:px-[64px] lg:px-[64px] md:px-[15px] py-[20px]">
      <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
        {bnbData.length > 0 &&
          bnbData.map((value, key) => (
            <>
              {loader ? (
                <Loader key={key} />
              ) : (
                <CardContainer data={value?.fields} key={key} />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default CardList;
