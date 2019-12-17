import React, { useContext } from "react";

import "./Login.css";
import ip from "../../../shared/ip/Ip";
// import { connect } from "react-redux";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../components/FormInput";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AuthContext } from "../../../shared/auth/AuthContext";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD
} from "../../../shared/validators/Validators";

const Login = props => {
  const Auth = useContext(AuthContext);

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
        Auth.login(token);
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
              errorText="Email non valide"
              validators={[VALIDATOR_PASSWORD()]}
              onInput={inputHandler}
            />
            <Button
              type="submit"
              variant="primary"
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

//output
// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: user => dispatch({ type: "LOGIN", user })
//   };
// };

export default Login;
// export default connect(null, mapDispatchToProps)(Login);
