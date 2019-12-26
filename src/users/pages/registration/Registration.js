import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ip from "../../../shared/ip/Ip";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../shared/components/FormInput";
import { AuthContext } from "../../../shared/auth/AuthContext";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD
} from "../../../shared/validators/Validators";

import "../../../shared/css/forms.css";

const NewUser = props => {
  const Auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm({
    firstname: {
      value: "",
      isValid: false
    },
    lastname: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    address: {
      value: "",
      isValid: false
    },
    zipcode: {
      value: "",
      isValid: false
    },
    city: {
      value: "",
      isValid: false
    },
    country: {
      value: "France",
      isValid: true
    },
    cgu: {
      value: 0,
      isValid: false
    },
    image: {
      value: "",
      isValid: false
    }
  });

  const handleCLick = event => {
    event.preventDefault();

    fetch(`${ip}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: formState.inputs.firstname.value,
        lastname: formState.inputs.lastname.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        phone: formState.inputs.phone.value,
        address: formState.inputs.address.value,
        zipcode: formState.inputs.zipcode.value,
        city: formState.inputs.city.value,
        country: formState.inputs.country.value
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data", data);
        Auth.login(data.token);
        props.history.push("/home");
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  return (
    <Container fluid className="SharedForm">
      <Row>
        <Col className="SharedFormHeader">
          <p className="text-center SharedFormTitle">INSCRIPTION</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form
            encType="multipart/form-data"
            onSubmit={handleCLick}
          >
            <FormInput
              autocomplete="given-name"
              element="input"
              initialValue={formState.inputs.firstname.value}
              initialValidate={formState.inputs.firstname.isValid}
              type="text"
              name="firstname"
              placeholder="Prénom"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="prénom non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="family-name"
              element="input"
              initialValue={formState.inputs.lastname.value}
              initialValidate={formState.inputs.lastname.isValid}
              type="text"
              name="lastname"
              placeholder="Nom"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="nom non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="email"
              element="input"
              initialValue={formState.inputs.email.value}
              initialValidate={formState.inputs.email.isValid}
              type="email"
              name="email"
              placeholder="email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="email non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="new-password"
              element="input"
              initialValue={formState.inputs.password.value}
              initialValidate={formState.inputs.password.isValid}
              type="password"
              name="password"
              placeholder="mot de passe"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
              errorText="Non valide : 10 à 20 caractères avec majuscule, chiffre, caractère spéciaux @$!%*?& "
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="tel"
              element="input"
              initialValue={formState.inputs.phone.value}
              initialValidate={formState.inputs.phone.isValid}
              type="text"
              name="phone"
              placeholder="téléphone"
              validators={[]}
              errorText="téléphone non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="address-line1"
              element="input"
              initialValue={formState.inputs.address.value}
              initialValidate={formState.inputs.address.isValid}
              type="text"
              name="address"
              placeholder="adresse"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="adresse non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="postal-code"
              element="input"
              initialValue={formState.inputs.zipcode.value}
              initialValidate={formState.inputs.zipcode.isValid}
              type="text"
              name="zipcode"
              placeholder="code postal"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="code postal non valide"
              onInput={inputHandler}
            />
            <FormInput
              autocomplete="address-level2"
              element="input"
              initialValue={formState.inputs.city.value}
              initialValidate={formState.inputs.city.isValid}
              type="text"
              name="city"
              placeholder="ville"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="ville non valide"
              onInput={inputHandler}
            />
            <FormInput
              element="select"
              initialValue={formState.inputs.country.value}
              initialValidate={formState.inputs.country.isValid}
              type="select"
              name="country"
              onInput={inputHandler}
            />
            <div>
            <FormInput
              element="input"
              initialValue={formState.inputs.cgu.value}
              initialValidate={formState.inputs.cgu.isValid}
              type="checkbox"
              name="cgu"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}              
            />
            <label>J'ai lu et accepte les CGU</label>
            </div>
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
              S'inscrire
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewUser;
