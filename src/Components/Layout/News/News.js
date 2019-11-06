import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewsCard from '../Cards/NewsCard'
import ip from '../../../Hoc/ip'
import './News.css'

const News = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = () => {
            return fetch(`${ip}/news/`)
                .then(result => result.json())
                .then(data => setNews(data))
                .catch(error => console.log('error', error))
        }
        getNews();
    }, [])


    return (
        <Container fluid className="News">
            <Row>
                <Col className='NewsHeader'>
                    <p className="text-center NewsTitle">Nouvelles Actus</p>
                </Col>
            </Row>
            <NewsCard news={news} />
        </Container>
    )
}

export default News
