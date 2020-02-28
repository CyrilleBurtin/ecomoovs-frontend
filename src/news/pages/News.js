import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import ip from '../../shared/ip/Ip';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {

    const abortController = new AbortController();

    const getNews = async () => {
      try {
        const response = await fetch(`${ip}/news/`, { signal: abortController.signal });
        const data = await response.json();
        setNews(data);
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.log(error);
        }
      }
    };
    getNews();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className='News'>
      <div className='NewsHeader'>
        <p className='NewsTitle'>Nouvelles Actus</p>
      </div>

      <NewsCard news={news} />
    </div>
  );
};

export default News;
