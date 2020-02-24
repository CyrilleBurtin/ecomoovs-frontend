import React, { useState } from 'react';
import ip from '../../../shared/ip/Ip';
import GreenButton from '../../../shared/uiElements/GreenButton';
import BlueButton from '../../../shared/uiElements/BlueButton';
import { removeDiacritics } from '../../../shared/components/DiacriticsRemover';

const Search = () => {
  const [tags, setTags] = useState('');
  const [result, setResult] = useState([]);

  const searchHanlder = event => {
    event.preventDefault();
    let ponctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let removedAccent = removeDiacritics(tags)
    let cleanTags = removedAccent
      .toLowerCase()
      .trim()
      .split(' ');
      cleanTags = cleanTags.filter(
      item => item.length > 2 && item !== ponctuation
    );

    const searchListe = async () => {
      try {
        const result = await fetch(`${ip}/moovs/findTags`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanTags)
        })
        const data = await result.json();
        setResult(data)
      } catch(error){
        console.log('Request failed', error);
      }

    }
    searchListe()
 
  };

  const inputHandler = event => {
    setTags(event.target.value);
  };

  const liste = result.map((e, i) => (
    <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
        <div style={{width: '15%', textAlign:'left'}}><img src={e.img.eager[0].secure_url} width='100px' alt={e.name}/></div>
        <div style={{width: '15%', textAlign:'left'}}>{e.title}</div>
        <div style={{width: '15%', textAlign:'left'}}>{e.location.city}</div>
        <div style={{width: '15%', textAlign:'left'}}>{e.type}</div>
        <div style={{width: '15%', textAlign:'left'}}>{e.name}</div>
      <BlueButton>Voir +</BlueButton>
    </div>
  ));

  return (
    <div className='pl-0 pr-0 pb-5 Home'>
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
        <div style={{ textAlign: 'center' }}>
          <GreenButton type='submit'>Chercher</GreenButton>
        </div>
      </form>

      <div
        style={{
          backgroundColor: '#fff',
          display: 'inline-flex',
          flexFlow: 'column wrap',
          justifyContent: 'spaceBetween',
          width: '100%',
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        {liste}
      </div>

      <div style={{ display: 'flex' }} className='justify-content-center'>
        <div toto='Navlink' to='/moovsList' className='activeStyle default'>
          <GreenButton>SOUMETTRE UNE ACTION</GreenButton>
        </div>
      </div>
    </div>
  );
};
export default Search;
