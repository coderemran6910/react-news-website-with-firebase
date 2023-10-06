import { useLoaderData } from "react-router-dom";
import Header from "../components/Sheared/Header";
import LeftSideBar from "../components/Sheared/LeftSideBar";
import RightSideBar from "../components/Sheared/RightSideBar";
import NewsCard from "./NewsCard";

const HomePage = () => {
  const newses = useLoaderData()
  console.log(newses);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        <div>
          <LeftSideBar> </LeftSideBar>
        </div>
        <div className="col-span-2 ">
          <h1 className="text-2xl"> Kashinagor News home  </h1>

        {
          newses.map(news => {
            return <NewsCard key={news._id} news={news}></NewsCard>
          })
        }
    
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
