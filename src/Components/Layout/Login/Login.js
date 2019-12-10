import React from "react";

import "./Login.css";
import ip from "../../../Hoc/ip";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { useForm } from "../../hooks/form-hook";
import FormInput from "../Registration/formInput";
import { Container, Row, Col, Button } from "react-bootstrap";
import { VALIDATOR_EMAIL, VALIDATOR_PASSWORD } from "../../Util/validators";

const Login = props => {
  const [formState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  });

  const loginHandler = event => {
    event.preventDefault();

    fetch(`${ip}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value
      })
    })
      .then(response => {
        return response.json();
      })
      .then(token => {
          console.log('token', token)
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(token));
        var decoded = jwtDecode(token);
        props.onLogin({ user: decoded.user, token: token });
        props.history.push("/home");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container fluid className="Registration">
      <Row>
        <Col className="RegistrationHeader">
          <p className="text-center RegistrationTitle">CONNEXION</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={loginHandler}>
            <FormInput
              element="input"
              type="text"
              name="email"
              placeholder="email"
              errorText="Email non valid"
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
            />
            <FormInput
              element="input"
              type="password"
              name="password"
              placeholder="Mot de passe"
              errorText="Email non valide"
              validators={[VALIDATOR_PASSWORD()]}
              onInput={inputHandler}
            />
          <Button type="submit" variant="primary" disabled={!formState.isValid}>
            Se connecter
          </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

//output
const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch({ type: "LOGIN", user })
  };
};

export default connect(null, mapDispatchToProps)(Login);
