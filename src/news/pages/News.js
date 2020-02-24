import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import ip from '../../shared/ip/Ip';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(`${ip}/news/`);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    getNews();
  }, []);

  return (
    <div className='News'>
      <div className='NewsHeader'>
        <p className='text-center NewsTitle'>Nouvelles Actus</p>
      </div>

      <NewsCard news={news} />
    </div>
  );
};

export default News;
