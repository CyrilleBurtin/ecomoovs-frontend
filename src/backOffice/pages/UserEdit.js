import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ip from "../../shared/ip/Ip";
import { useForm } from "../../shared/hooks/Form-hook";
import FormInput from "../../shared/components/FormInput";
import { AuthContext } from "../../shared/auth/AuthContext";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../shared/validators/Validators";
import Loading from "../../shared/components/Loading";
import "../../shared/css/forms.css";

const UserEdit = () => {

  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formState, inputHandler] = useForm({
    firstname: {
      value: Auth.user.firstname,
      isValid: true
    },
    lastname: {
      value: Auth.user.lastname,
      isValid: true
    },
    email: {
      value: Auth.user.email,
      isValid: true
    },    
    phone: {
      value: Auth.user.phone,
      isValid: true
    },
    address: {
      value: Auth.user.location.address,
      isValid: true
    },
    zipcode: {
      value: Auth.user.location.zipcode,
      isValid: true
    },
    city: {
      value: Auth.user.location.city,
      isValid: true
    },
    country: {
      value: Auth.user.location.country,
      isValid: true
    },
    cgu: {
      value: 1,
      isValid: true
    }
  },
  true
  );

  const handleCLick = event => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`${ip}/users/${Auth.user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({        
        firstname: formState.inputs.firstname.value,
        lastname: formState.inputs.lastname.value,
        email: formState.inputs.email.value,
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
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(data));
        setIsLoading(false);
        Auth.login(data.token);   
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  return (
    <Container fluid className="SharedForm">
      <Row>
        <Col className="SharedFormHeader">
          <p className="text-center SharedFormTitle">Mon compte</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form encType="multipart/form-data" onSubmit={handleCLick}>
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
            
            {isLoading && <Loading msg="Inscription en cours..." />}
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
              Enregister les modifications
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserEdit;
