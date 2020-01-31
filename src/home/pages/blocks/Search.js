import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ip from "../../../shared/ip/Ip";

const Search = () => {
  const [tags, setTags] = useState("");
  const [result, setResult] = useState([]);

  const searchHanlder = event => {
    event.preventDefault();
    let ponctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let cleanTags = tags
      .toLowerCase()
      .trim()
      .split(" ");
    cleanTags = cleanTags.filter(
      item => item.length > 2 && item !== ponctuation
    );

    fetch(`${ip}/moovs/findTags`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanTags)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setResult(data);
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  const inputHandler = event => {
    setTags(event.target.value);
  };

  const liste = result.map((e, i) => (
    <div key={i}>
      {e.name} {e.location.city}
    </div>
  ));

  return (
    <div className="pl-0 pr-0 pb-5 Home">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="H1Small" style={{}}>
          Trouver <span className="H1Strong">Magasin zéro déchet </span>
          près de <span className="H1Strong">Annecy</span>
        </h1>
        <h4 className="H4" style={{}}>
          Trouvez des initiatives durables près de chez vous
        </h4>
      </div>

      <form onSubmit={searchHanlder}>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <input
            placeholder="Que cherchez vous ?"
            type="input"
            onChange={inputHandler}
            style={{ margin: "0 20px" }}
          />

          <input
            placeholder="Où"
            type="input"
            // onChange={whereHandler}
            style={{ backgroundColor: "#FFF" }}
          />

          <button
            style={{ backgroundColor: "#FFF" }}
            variant="outline-secondary"
          >
            ME LOCALISER{" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#77eebe" />{" "}
          </button>

          <button
            variant="outline-secondary"
            style={{ backgroundColor: "#77eebe" }}
          >
            <FontAwesomeIcon icon={faSearch} color="#fff" />
          </button>
        </div>
        <br />
        <button type="submit">chercher</button>
      </form>

      <div
        style={{
          backgroundColor: "#fff",
          display: "inline-flex",
          flexFlow: "column wrap",
          justifyContent: "spaceBetween",
          width: "50%",
          margin:"auto",
          textAlign: "center"
        }}
      >
        {liste}
      </div>

      <div style={{ display: "flex" }} className="justify-content-center">
        <div toto="Navlink" to="/moovsList" className="activeStyle default">
          <button
            className="mt-5 p-3 font-weight-bold border-0"
            style={{
              backgroundColor: "#00e689",
              color: "#fff",
              borderRadius: "7px"
            }}
          >
            SOUMETTRE UNE ACTION
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
