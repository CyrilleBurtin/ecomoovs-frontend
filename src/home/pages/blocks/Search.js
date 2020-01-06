import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ip from "../../../shared/ip/Ip";
 
const Search = () => {

  const [tags, setTags] = useState("");
  const [result, setResult] = useState([]);

  const searchHanlder = event => {
    event.preventDefault();
    console.log('toto')

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
        console.log("dataaaaaaa", data);
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  const inputHandler = event => {
    setTags(event.target.value);
  };


  const liste = result.map((e, i) => <div key={i}>{e.name} {e.location.city}</div>);


  console.log("liste", liste);

  return (
    <Container fluid className="pl-0 pr-0 pb-5 Home">
      <Row>
        <Col>
          <h1 className="H1Small">
            Trouver <span className="H1Strong">Magasin zéro déchet </span>
            près de <span className="H1Strong">Annecy</span>
          </h1>

          <h4 className="H4">
            Trouvez des initiatives durables près de chez vous
          </h4>
        </Col>
      </Row>

      <Row style={{ marginTop: 30, justifyContent: "center" }}>
        <Col sm="10" md="5" className="mb-2">
          <form type="submit" onSubmit={searchHanlder}>
            <input
              placeholder="Que cherchez vous ?"
              type="input"
              onChange={inputHandler}
            />
            <button >
              chercher
            </button>
          </form>
          {/* <InputGroup style={{ backgroundColor: "#fff" }}>
            <FormControl placeholder="Que cherchez-vous ?" />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Catégories"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup> */}

          {liste}
        </Col>
        <Col sm="10" md="5" className="mb-2">
          <InputGroup style={{ backgroundColor: "#FFF" }}>
            <FormControl placeholder="Où" />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                ME LOCALISER{" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} color="#77eebe" />{" "}
              </Button>
              <Button
                variant="outline-secondary"
                style={{ backgroundColor: "#77eebe" }}
              >
                <FontAwesomeIcon icon={faSearch} color="#fff" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <div toto="Navlink" to="/moovsList" className="activeStyle default">
          <Button
            className="rounded-0 mt-5 p-3 font-weight-bold border-0"
            style={{ backgroundColor: "#00e689" }}
          >
            SOUMETTRE UNE ACTION
          </Button>
        </div>
      </Row>
    </Container>
  );
};
export default Search;
