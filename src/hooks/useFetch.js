import { useState, useEffect } from 'react';
import ip from '../shared/ip/Ip';

const useFetch = (url, options) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${ip}/${url}/`, options);
        const result = await res.json();
        setResponse(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, options]);

  return { response, error };
};

export default useFetch;
