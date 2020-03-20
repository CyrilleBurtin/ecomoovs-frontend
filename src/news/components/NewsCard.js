import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import './NewsCard.css';

const NewsCard = props => {
  // News insert date
  const dateGen = insertDate => {
    let date = new Date(insertDate);
    return ` ${date.getDate()} ${new Intl.DateTimeFormat('fr-FR', {
      month: 'short'
    }).format(date)} ${date.getFullYear()}`;
  };

  const newscard = props.news.map((e, i) => {

    const publishDate = dateGen(e.creationDate);
    const tags = e.tags.map((tag, i) => <span key={i}>{tag}</span>);
   
    return (
      <div key={i} className='newsCards'>
        <div>
          <img src={e.image} style={{ width: '100%' }} alt='news' />
        </div>
        <div>{e.title}</div>
        <div className='description'>{e.description}</div>
        <div className='tag'>{tags}</div>

        <div className='cardContent'>
          <div className='author'>
            <img
              src='/images/monkey.jpg'
              style={{ width: '30px', height: '30px' }}
              alt='user'
            />
            <p>
              {e.author} <FontAwesomeIcon icon={faCrown} color='#000' />
            </p>
          </div>
          <p>{publishDate}</p>
        </div>
      </div>
    );
  });

  return (
  <div className='newsCardGrid'>
    {newscard}
  </div>
  )

};

export default NewsCard;
