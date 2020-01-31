import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ip from "../../../shared/ip/Ip";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../shared/components/FormInput";
import { AuthContext } from "../../../shared/auth/AuthContext";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from "../../../shared/validators/Validators";
import "../../../shared/css/forms.css";
import Loading from "../../../shared/components/Loading";

const Login = props => {
  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  },
  false
  );

  const loginHandler = event => {
    event.preventDefault();
    setIsLoading(true);
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
        setIsLoading(false);
        Auth.login(token);
        props.history.push("/home");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container fluid className="SharedForm">
      <Row>
        <Col className="SharedFormHeader">
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
              autocomplete="email"
              placeholder="email"
              errorText="Email non valid"
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
            />
            <FormInput
              element="input"
              type="password"
              name="password"
              autocomplete="current-password"
              placeholder="Mot de passe"
              errorText="Mot de passe non valide"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            {isLoading && <Loading msg="Connexion en cours" />}
            <Button
              type="submit"
              variant="primary"
              style={{
                margin: "50px Auto",
                textAlign: "center",
                display: "block"
              }}
              disabled={!formState.isValid}
            >
              Connexion
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
