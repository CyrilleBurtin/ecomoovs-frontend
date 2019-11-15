import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import passwordChecker from '../../../Hoc/checkers/passwordChecker/passwordChecker'
import emailChecker from '../../../Hoc/checkers/emailChecker/emailChecker'
import jwtDecode from 'jwt-decode';
import ip from "../../../Hoc/ip"
import './Login.css'
import { connect } from 'react-redux'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailIsValid, setEmailIsValid] = useState({})
    const [passwordIsValid, setPasswordIsValid] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const loginChangeHandler = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'password':
                let password = passwordChecker(value, setPasswordIsValid)
                if (password) {
                    setPassword(value)
                }
                break;
            case 'email':
                let email = emailChecker(value, setEmailIsValid)
                if (email) {
                    setEmail(value)
                }
                break;
            default:
                return true;
        }
    }

    const handleClick = () => {
        setErrorMessage('')
        fetch(`${ip}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then(response => {
                return response.json()
            })
            .then(token => {
                localStorage.setItem('AUTH_TOKEN', JSON.stringify(token))
                var decoded = jwtDecode(token)
                props.onLogin({user: decoded.user, token: token})
                props.history.push('/backoffice')
            })
            .catch(error => {
                console.log('Mot de passe', error)
                setErrorMessage("email ou mot de passe non valide")
            })
    }

    return (
        <Container fluid className="Registration">
            <Row>
                <Col className='RegistrationHeader'>
                    <p className="text-center RegistrationTitle">CONNEXION</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control required type="email" name="email" placeholder="Email" onChange={loginChangeHandler} style={emailIsValid} autoComplete="username" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control required type="password" name="password" placeholder="Mot de passe" onChange={loginChangeHandler} style={passwordIsValid} autoComplete="current-password" />
                        </Form.Group>
                        <p className="LoginError">{errorMessage}</p>
                        <Button variant="primary" onClick={handleClick}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

//output
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: user => dispatch({ type:'LOGIN', user})
    }
}



export default connect(null, mapDispatchToProps)(Login)
