import React from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import './NewsCard.css'

const NewsCard = (props) => {

    const dateGen = (insertDate) => {
        let date = new Date(insertDate)
        return ` ${date.getDate()} ${new Intl.DateTimeFormat('fr-FR', ({ month: 'short' })).format(date)} ${date.getFullYear()}`
    }

    return (
        <>
            {
                props.news.map((e, i) => {
                    const publishDate = dateGen(e.creationDate)
                    return (
                        <Row key={i} className="justify-content-md-center NewsCards">
                            <Col className="col-md-5 pl-0 pr-0">
                                <Image src="/images/monkey.jpg" style={{ width: "100%" }} />
                            </Col>
                            <Col className="col-md-7 pl-0 pr-0">
                                <Card className="p-5 CardContent" key={i}>
                                    <Card.Subtitle key={i} className="mb-2 text-muted">
                                        <Row>
                                            <Col className='col-1'>
                                                <Image src="/images/monkey.jpg" style={{ width: "30px" }} roundedCircle />
                                            </Col>
                                            <Col>
                                                <p>{e.author} <FontAwesomeIcon icon={faCrown} color="#000" /></p>
                                                <p>{publishDate}</p>
                                            </Col>
                                        </Row>

                                    </Card.Subtitle>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>{e.description}</Card.Text>
                                </Card>
                            </Col>
                        </Row>
                    )
                }

                )
            }
        </>
    )
}

export default NewsCard
