import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import ip from "../../shared/ip/Ip";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${ip}/news/`)
      .then(result => result.json())
      .then(data => setNews(data))
      .catch(error => console.log("error", error));
  }, []);

  return (
    <Container fluid className="News">
      <Row>
        <Col className="NewsHeader">
          <p className="text-center NewsTitle">Nouvelles Actus</p>
        </Col>
      </Row>
      <NewsCard news={news} />
    </Container>
  );
};

export default News;
