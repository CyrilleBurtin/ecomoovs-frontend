import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import ip from "../../shared/ip/Ip";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${ip}/news/`)
      .then(result => result.json())
      .then(data => setNews(data))
      .catch(error => console.log("error", error));
  }, []);

  return (
    <div className="News">
      
        <div className="NewsHeader">
          <p className="text-center NewsTitle">Nouvelles Actus</p>
        </div>
      
      <NewsCard news={news} />
    </div>
  );
};

export default News;
