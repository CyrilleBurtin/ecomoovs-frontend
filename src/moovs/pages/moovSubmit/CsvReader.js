import React, { useState, useEffect, useRef, useContext } from 'react';
import { CSVReader } from 'react-papaparse';
import './csv.css';
import ip from '../../../shared/ip/Ip';
import { AuthContext } from '../../../shared/auth/AuthContext';

const CsvReader = () => {

  const [data, setData] = useState([]);
  const [csv, setCsv] = useState();
  const Auth = useContext(AuthContext);
  const buttonRef = useRef();

  console.log('data', data);

  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      let temp = [];

      for (const iterator of data) {
        temp.push(iterator.data.map((e, i) => <span key={i}>{e}</span>));
      }
      console.log('temp', temp)
      temp = temp.map((e, i) => (
        <div id={`row${i}`} className='rows' key={i}>{e}</div>
      ));

      setCsv(temp);
    }
  }, [data]);

  const handleOnFileLoad = (file) => {
    console.log('---------------------------');
    setData(file);
    console.log('---------------------------');
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
      setCsv();
    }
  };

  const handleSendFile = async (event) => {
    event.preventDefault();

    let fetchData = [];
    for (const iterator of data) {
      if (iterator.data.length > 1) {
        fetchData.push(iterator.data);
      }
    }

    try {
      const response = await fetch(`${ip}/moovs/importCsv`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Auth.token}`,
      },
      body: JSON.stringify(fetchData),
    });
    const result = await response.json()
    console.log('result', result)
  } 
  catch(error){
      console.log('error', error)
  }
  }
  return (
    <>
      <h5>Moovs CSV Upload</h5>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <button
              type='button'
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Browe file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%',
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
      {csv && (
        <>
          <div id='table'>{csv}</div>
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <button onClick={handleSendFile}>
              Valider et envoyer le fichier
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CsvReader;
