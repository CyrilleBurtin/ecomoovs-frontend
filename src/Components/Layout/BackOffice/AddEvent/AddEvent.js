import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailChecker from '../../../../Hoc/checkers/emailChecker/emailChecker'
import ip from "../../../../Hoc/ip"

const AddEvent = (props) => {

    const [newEvent, setNewEvent] = useState({
        country: "France"
    })

    const [emailIsValid, setEmailIsValid] = useState({})


    const formChangeHandler = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                let mail = emailChecker(value, setEmailIsValid)
                if (mail) {
                    setNewEvent({ ...newEvent, [name]: value })
                }
                break;
            default:
                setNewEvent({ ...newEvent, [name]: value });
                break;
        }
    };


    const registrationClickHandler = (event) => {
        event.preventDefault()

            fetch(`${ip}/event/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...newEvent
                })
            }).then(response => {
                return response.json();
            }).then(data => {
                if (data.registration) {
                    setNewEvent(data)
                }
            }).catch(error => {
                console.log('Request failed', error);
            });
    }


    return (
        <Container fluid className="Registration">
            <Row>
                <Col className='RegistrationHeader'>
                    <p className="text-center RegistrationTitle">AJOUTER UN ÉVÉNEMENT</p>
                </Col>
            </Row>
            <Row>
                <Col className="pt-5 pb-5">
                    <Form>
                       {/* name */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}
                                <Form.Control type="text" name="name" onChange={formChangeHandler} placeholder="Nom" required={true} />
                            </Form.Group>
                        </Form.Row>
                       {/* PunchLine */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}
                                <Form.Control type="text" name="punchLine" onChange={formChangeHandler} placeholder="Punchline" required={true} />
                            </Form.Group>
                        </Form.Row>
                        {/* dateIn */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}
                                <Form.Control type="date" name="dateIn" onChange={formChangeHandler} placeholder="Date de début" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* dateOut */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}                                
                                <Form.Control type="date" name="dateOut" onChange={formChangeHandler} placeholder="Date de fin" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* Descritpion */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}
                                <Form.Control as="textarea" rows="10" name="description" onChange={formChangeHandler} placeholder="Description" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* email */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control autoComplete="username" style={emailIsValid} type="email" name="email" onChange={formChangeHandler} placeholder="Email" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* phone */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Téléphone</Form.Label> */}
                                <Form.Control type="tel" name="phone" onChange={formChangeHandler} placeholder="Téléphone" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* adresse */}
                        <Form.Group >
                            {/* <Form.Label>Adresse</Form.Label> */}
                            <Form.Control autoComplete="address-line1" name="address" onChange={formChangeHandler} placeholder="adresse" required={true} />
                        </Form.Group>

                        {/* zipcode */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Code Postal</Form.Label> */}
                                <Form.Control autoComplete="postal-code" name="zipcode" onChange={formChangeHandler} placeholder="Code Postal" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* city */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Ville</Form.Label> */}
                                <Form.Control autoComplete="address-level2" name="city" onChange={formChangeHandler} placeholder="Ville" />
                            </Form.Group>
                        </Form.Row>

                        {/* country */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Pays</Form.Label> */}
                                <Form.Control as="select" name="country" onChange={formChangeHandler}>
                                    <option>France</option>
                                    <option>Belgique</option>
                                    <option>Suisse</option>
                                    <option>Luxembourg</option>
                                    <option>Monaco</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        
                        <Button variant="primary" onClick={(event) => registrationClickHandler(event)}>Valider</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddEvent;
