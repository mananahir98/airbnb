import CardList from "../../component/home/cardList";
import Filter from "../../component/home/filter";

const Home = () => {
  return (
    <div className="mt-[35px]">
      <Filter />
      <CardList />
    </div>
  );
};

export default Home;
