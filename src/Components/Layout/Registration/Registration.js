import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import passwordChecker from '../../../Hoc/checkers/passwordChecker/passwordChecker'
import emailChecker from '../../../Hoc/checkers/emailChecker/emailChecker'
import './Registration.css'
import ip from "../../../Hoc/ip"

const NewUser = (props) => {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        zipcode: "",
        city: "",
        country: "France",
        cgu: false
    })

         //    checkers
        const [formIsValid, setFormIsValid] = useState(true)
        const [passwordIsValid, setPasswordIsValid] = useState({})
        const [emailIsValid, setEmailIsValid] = useState({})
        const [cguIsValid, setCguIsValid] = useState({})
        

    const formChangeHandler = event => {
        const { name, value, checked } = event.target;

        switch (name) {
            case 'password':
                let pass = passwordChecker(value, setPasswordIsValid)
                if (pass) {
                    setUser({ ...user, [name]: value })
                }
                break;
            case 'email':
                let mail = emailChecker(value, setEmailIsValid)
                if (mail) {
                    setUser({ ...user, [name]: value })
                }
                break;
            case 'cgu':
                setUser({ ...user, [name]: checked });
                setCguIsValid({})
                break;
            default:
                setUser({ ...user, [name]: value });
                break;
        }

    };


    const registrationClickHandler = (event) => {
        event.preventDefault()

        if (!user.cgu) {
            setCguIsValid({ color: "#F00" })
            return false
        }


        if (formIsValid) {
            fetch(`${ip}/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...user
                })
            }).then(response => {
                return response.json();
            }).then(data => {
                if (data.registration) {
                    console.log('data', data)
                    localStorage.setItem('AUTH_TOKEN', JSON.stringify(data));
                    setUser(data)
                    props.history.push('/home')
                }
            }).catch(error => {
                console.log('Request failed', error);
            });
        }
    }


    return (
        <Container fluid className="Registration">
            <Row>
                <Col className='RegistrationHeader'>
                    <p className="text-center RegistrationTitle">Inscription</p>
                </Col>
            </Row>
            <Row>
                <Col className="pt-5 pb-5">
                    <Form>
                        {/* firstname */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Prénom</Form.Label> */}
                                <Form.Control autoComplete="given-name" type="text" name="firstname" onChange={formChangeHandler} placeholder="Prénom" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* name */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Nom</Form.Label> */}
                                <Form.Control autoComplete="name" type="text" name="lastname" onChange={formChangeHandler} placeholder="Nom" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* email */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control autoComplete="username" style={emailIsValid} type="email" name="email" onChange={formChangeHandler} placeholder="Email" required={true} />
                            </Form.Group>
                        </Form.Row>

                        {/* password */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <Form.Label >Mot De Passe <i style={{ fontSize: "10px" }}></i></Form.Label> */}
                                <Form.Control autoComplete="new-password" style={passwordIsValid} type="password" name="password" onChange={formChangeHandler} placeholder="Mot de passe = 8 à 16 caractères avec au moins une majuscule, un chiffre et un caractère spécial" required={true} />
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

                        {/* cgu */}
                        <Form.Group>
                            <Form.Check type="checkbox" label="J'accepte les CGU" name="cgu" onChange={formChangeHandler} style={cguIsValid} />
                            {/* <Form.Check type="checkbox" label="J'accepte les CGU" name="cgu" onChange={e => setCgu(e.target.checked)} style={cguIsValid} /> */}
                        </Form.Group>
                        <Button variant="primary" onClick={(event) => registrationClickHandler(event)}>Valider</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewUser;
