import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "../../../shared/hooks/Form-hook";

import FormInput from "../../components/FormInput";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../../shared/validators/Validators";
// import ip from "../../../shared/Ip/ip";

const NewUser = () => {
  const [formState, inputHandler] = useForm({
    firstname: {
      value: "",
      isValid: false
    },
    name: {
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
      value: false,
      isValid: false
    }
  });

  console.log("formState", formState);

  const registrationClickHandler = event => {
    event.preventDefault();
    console.log("test ok");
    // fetch(`${ip}/users/`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     ...inputState.user
    //   })
    // }).then(response => {
    //   return response.json();
    // }).then(data => {
    //   if (data.registration) {
    //     console.log('data', data)
    //     localStorage.setItem('AUTH_TOKEN', JSON.stringify(data));
    //     // setUser(data)
    //     props.history.push('/home')
    //   }
    // }).catch(error => {
    //   console.log('Request failed', error);
    // });
  };

  return (
    <form className="place-form" onSubmit={registrationClickHandler}>
      <FormInput
        autocomplete="given-name"
        element="input"
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
        type="text"
        name="name"
        placeholder="Nom"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="nom non valide"
        onInput={inputHandler}
      />
      <FormInput
        autocomplete="email"
        element="input"
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
        type="text"
        name="password"
        placeholder="mot de passe"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="mot de passe non valide : 8 à 16 caractères avec une majuscule, un chiffre et un caractère spécial"
        onInput={inputHandler}
      />
      <FormInput
        autocomplete="tel"
        element="input"
        type="text"
        name="phone"
        placeholder="téléphone"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="téléphone non valide"
        onInput={inputHandler}
      />
      <FormInput
        autocomplete="address-line1"
        element="input"
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
        type="text"
        name="city"
        placeholder="ville"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="ville non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="select"
        type="select"
        name="country"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="checkbox"
        name="cgu"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        label="CGU"
      />
      <label>J'ai lu et accepte les CGU</label>
      <Button type="submit" variant="primary" disabled={!formState.isValid}>
        S'inscrire
      </Button>
    </form>
  );
};

export default NewUser;