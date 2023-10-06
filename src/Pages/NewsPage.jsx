import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideBar from "../components/Sheared/RightSideBar";

import Navbar from "../components/Sheared/Navbar";
import { AuthContext } from "../Provider/AuthProvider";

const NewsPage = () => {
    const {id} =useParams()
    const allData = useLoaderData()
    const [dataNews, setDataNews] = useState({})

    useEffect(()=>{

        const newsData = allData.find(data => data._id === id)
            setDataNews(newsData)

    } ,[allData, id])

    // console.log(dataNews);
    const {thumbnail_url, title, details , } = dataNews


    return (
        <>
       
        <Navbar> </Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className=" col-span-3"> 
            <div className="mt-10">
      <div className="card w-full bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-full object-cover object-top"
            src={thumbnail_url}
            alt="news"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {details}
          </p>
        </div>
      </div>
    </div>
            </div>
            <div> <RightSideBar> </RightSideBar> </div>
        </div>
        </>
    );
};

export default NewsPage;