import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ip from '../../../shared/ip/Ip';
import { removeDiacritics } from '../../../shared/components/DiacriticsRemover';
import GreenButton from '../../../shared/uiElements/GreenButton';
import BlueButton from '../../../shared/uiElements/BlueButton';
import './blocks.css'

const Search = () => {
  const [tags, setTags] = useState('');
  const [result, setResult] = useState([]);

  const searchListe = async cleanTags => {
    try {
      const result = await fetch(`${ip}/moovs/findTags`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanTags)
      });
      const data = await result.json();
      setResult(data);
    } catch (error) {
      console.log('Request failed', error);
    }
  };

  const searchHanlder = event => {
    event.preventDefault();
    let ponctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let removedAccent = removeDiacritics(tags);
    let cleanTags = removedAccent
      .toLowerCase()
      .trim()
      .split(' ');
    cleanTags = cleanTags.filter(
      item => item.length > 2 && item !== ponctuation
    );

    searchListe(cleanTags);
  };

  const inputHandler = event => {
    setTags(event.target.value);
  };

  const liste = result.map((e, i) => (
    <div className='search' key={i}>
      <div>
        <img src={e.img.eager[0].secure_url} width='100px' alt={e.name} />
      </div>
      <div>{e.title}</div>
      <div>{e.location.city}</div>
      <div>{e.type}</div>
      <div>{e.name}</div>
      <div>
        <NavLink
          to={{ pathname: '/moov', moovData: e }}
          activeClassName='active'
        >
          <BlueButton>Voir +</BlueButton>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <div className='home'>
      <div className='homebgc'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className='H1Small' style={{}}>
            Trouver <span className='H1Strong'>Magasin zéro déchet </span>
            près de <span className='H1Strong'>Annecy</span>
          </h1>
          <h4 className='H4' style={{}}>
            Trouvez des initiatives durables près de chez vous
          </h4>
        </div>

        <form onSubmit={searchHanlder}>
          <div
            style={{
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
              flexFlow: 'row wrap'
            }}
          >
            <input
              placeholder='Que cherchez vous ?'
              type='input'
              onChange={inputHandler}
            />

            <input
              placeholder='Où'
              type='input'
              // onChange={whereHandler}
            />
          </div>
          <br />
          <div className='searchButton'>
            <GreenButton type='submit'>Chercher</GreenButton>
          </div>
        </form>

        {liste}

        <div className='searchButton'>
          <NavLink to={'/moov'} activeClassName='active'>
            <GreenButton>SOUMETTRE UNE ACTION</GreenButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Search;
