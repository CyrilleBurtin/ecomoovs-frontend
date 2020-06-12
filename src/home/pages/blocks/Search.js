import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../shared/auth/AuthContext';

import ip from '../../../shared/ip/Ip';
import GreenButton from '../../../shared/uiElements/GreenButton';
import BlueButton from '../../../shared/uiElements/BlueButton';
import './blocks.css';

const Search = () => {
  const Auth = useContext(AuthContext);

  const [query, setQuery] = useState({});
  const [result, setResult] = useState([]);

  let submitLink = '/connexion';
  if (Auth.isLoggedIn) {
    submitLink = '/soumettre-une-nouvelle-action';
  }

  const inputHandler = (event, queryType) => {
    setQuery({ ...query, [queryType]: event.target.value });
  };

  const searchHanlder = (event) => {
    event.preventDefault();
    searchListe(query);
  };

  const cleanQuery = (query) => {
    let queryObj = {};
    for (const element in query) {
      let ponctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
      let cleanQuery = query[element].trim().split(' ');
      cleanQuery = cleanQuery.filter(
        (item) => item.length > 2 && item !== ponctuation
      );
      queryObj = { ...queryObj, [element]: cleanQuery };
    }
    return queryObj;
  };

  const searchListe = async (query) => {
    const postQuery = cleanQuery(query);

    try {
      const result = await fetch(`${ip}/moovs/findMoovs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postQuery),
      });

      const data = await result.json();
      setResult(data);

    } catch (error) {
      console.log('Request failed', error);
    }
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
              flexFlow: 'row wrap',
            }}
          >
            <input
              placeholder='Que cherchez vous ?'
              type='input'
              onChange={(e) => inputHandler(e, 'what')}
            />

            <input
              placeholder='Où'
              type='input'
              onChange={(e) => inputHandler(e, 'where')}
            />
          </div>

          <div className='searchButton'>
            <GreenButton type='submit'>Chercher</GreenButton>
          </div>
        </form>

        {liste}

        <div className='searchButton'>
          <NavLink
            to={{
              pathname: submitLink,
              linkdata: '/soumettre-une-nouvelle-action',
            }}
            activeClassName='active'
          >
            <GreenButton>SOUMETTRE UN MOOV</GreenButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Search;
