import React, { useState, useEffect } from "react";
import ip from "../../shared/ip/Ip";

import Search from "./blocks/Search";
import Explain from "./blocks/Explain";
import Last from "./blocks/Last";
import Quotations from "./blocks/Quotations";
import Next from "./blocks/Next";
import Help from "./blocks/Help";

import "./Home.css";

const Home = () => {
  const [moovs, setMoovs] = useState([]);

  useEffect(() => {
    const getMoovsList = () => {
      return fetch(`${ip}/moovs/`)
        .then(response => response.json())
        .then(data => setMoovs(data))
        .catch(error => console.log(error));
    };
    getMoovsList();
  }, []);

  return (
    <>
      <Search />
      <Explain />
      <Last last={moovs} />
      <Quotations />
      <Next next={moovs} />
      <Help />
    </>
  );
};

export default Home;
