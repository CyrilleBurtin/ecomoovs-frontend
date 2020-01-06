import React, { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import ip from "../../shared/ip/Ip";

import { AuthContext } from "../../shared/auth/AuthContext";
import { useForm } from "../../shared/hooks/Form-hook";
import FormInput from "../../shared/components/FormInput";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../shared/validators/Validators";
import "../../shared/css/forms.css";

const AddEvent = () => {
  const Auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm({
    name: {
      value: "",
      isValid: false
    },
    punchline: {
      value: "",
      isValid: false
    },
    dateIn: {
      value: "",
      isValid: false
    },
    dateOut: {
      value: "",
      isValid: false
    },
    description: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    zipcode: {
      value: "",
      isValid: false
    },
    address: {
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
    }
  });

  const handleClick = event => {
    event.preventDefault();

    fetch(`${ip}/event/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Auth.user._id,
        name: formState.inputs.name.value,
        punchline: formState.inputs.punchline.value,
        dateIn: formState.inputs.dateIn.value,
        dateOut: formState.inputs.dateOut.value,
        description: formState.inputs.description.value,
        email: formState.inputs.email.value,
        phone: formState.inputs.phone.value,
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
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  return (
    <Container fluid className="SharedForm">
      <Row>
        <Col className="SharedFormHeader">
          <p className="text-center SharedFormTitle">AJOUTER UN ÉVÉNEMENT</p>
        </Col>
      </Row>
      <Row>
        <Col className="pt-5 pb-5">
          <form onSubmit={handleClick}>
            {/* name */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Nom</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.name.value}
                  initialValidate={formState.inputs.name.isValid}
                  type="text"
                  name="name"
                  onInput={inputHandler}
                  placeholder="Nom"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Nom non valide"
                />
              </Form.Group>
            </Form.Row>
            {/* PunchLine */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Nom</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.punchline.value}
                  initialValidate={formState.inputs.punchline.isValid}
                  type="text"
                  name="punchline"
                  onInput={inputHandler}
                  placeholder="Punchline"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Punchline non valide"
                />
              </Form.Group>
            </Form.Row>
            {/* dateIn */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Nom</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.dateIn.value}
                  initialValidate={formState.inputs.dateIn.isValid}
                  type="date"
                  name="dateIn"
                  onInput={inputHandler}
                  placeholder="Date de début"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Date non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* dateOut */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Nom</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.dateOut.value}
                  initialValidate={formState.inputs.dateOut.isValid}
                  type="date"
                  name="dateOut"
                  onInput={inputHandler}
                  placeholder="Date de fin"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Date non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* Descritpion */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Nom</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.description.value}
                  initialValidate={formState.inputs.description.isValid}
                  as="textarea"
                  rows="10"
                  name="description"
                  onInput={inputHandler}
                  placeholder="Description"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Description non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* email */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Email</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.email.value}
                  initialValidate={formState.inputs.email.isValid}
                  autoComplete="email"
                  type="email"
                  name="email"
                  onInput={inputHandler}
                  placeholder="Email"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Email non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* phone */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Téléphone</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.phone.value}
                  initialValidate={formState.inputs.phone.isValid}
                  type="tel"
                  name="phone"
                  onInput={inputHandler}
                  placeholder="Téléphone"
                  validators={[]}
                  errorText="téléphone non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* adresse */}
            <Form.Group>
              {/* <Form.Label>Adresse</Form.Label> */}
              <FormInput
                element="input"
                initialValue={formState.inputs.address.value}
                initialValidate={formState.inputs.address.isValid}
                autoComplete="address-line1"
                name="address"
                onInput={inputHandler}
                placeholder="adresse"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Adresse non valide"
              />
            </Form.Group>

            {/* zipcode */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Code Postal</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.zipcode.value}
                  initialValidate={formState.inputs.zipcode.isValid}
                  autoComplete="postal-code"
                  name="zipcode"
                  onInput={inputHandler}
                  placeholder="Code Postal"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Code postal non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* city */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Ville</Form.Label> */}
                <FormInput
                  element="input"
                  initialValue={formState.inputs.city.value}
                  initialValidate={formState.inputs.city.isValid}
                  autoComplete="address-level2"
                  name="city"
                  onInput={inputHandler}
                  placeholder="Ville"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Ville non valide"
                />
              </Form.Group>
            </Form.Row>

            {/* country */}
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Pays</Form.Label> */}
                <FormInput
                  element="select"
                  initialValue={formState.inputs.country.value}
                  initialValidate={formState.inputs.country.isValid}
                  as="select"
                  name="country"
                  onInput={inputHandler}
                  validators={[]}
                  errorText="Ville non valide"
                />
              </Form.Group>
            </Form.Row>
            <Button
              type="submit"
              variant="primary"
              disabled={!formState.isValid}
            >
              Valider
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEvent;