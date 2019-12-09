import React from "react";
import { Button } from "react-bootstrap";
import FormInput from "./formInput";
import ip from "../../../Hoc/ip";
import { VALIDATOR_REQUIRE } from "../../Util/validators";
const NewPlace = () => {
  // const registrationClickHandler = event => {
  //   event.preventDefault()

  //   fetch(`${ip}/users/`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       ...inputState.user
  //     })
  //   }).then(response => {
  //     return response.json();
  //   }).then(data => {
  //     if (data.registration) {
  //       console.log('data', data)
  //       localStorage.setItem('AUTH_TOKEN', JSON.stringify(data));
  //       // setUser(data)
  //       props.history.push('/home')
  //     }
  //   }).catch(error => {
  //     console.log('Request failed', error);
  //   });
  // }

  return (
    <form className="place-form">
      <FormInput
        element="input"
        type="text"
        name="firstname"
        placeholder="Prénom"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="prénom non valide"
      />
      <FormInput
        element="input"
        type="text"
        name="name"
        placeholder="Nom"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="nom non valide"
      />
      <FormInput
        element="input"
        type="email"
        name="email"
        placeholder="email"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="email non valide"
      />
      <FormInput
        element="input"
        type="text"
        name="password"
        placeholder="mot de passe"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="mot de passe non valide : 8 à 16 caractères avec une majuscule, un chiffre et un caractère spécial"
      />
      <FormInput
        element="input"
        type="text"
        name="phone"
        placeholder="téléphone"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="téléphone non valide"
      />
      <FormInput
        element="input"
        type="text"
        name="adress"
        placeholder="adresse"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="adresse non valide"
      />
      <FormInput
        element="input"
        type="text"
        name="zipcode"
        placeholder="code postal"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="code postal non valide"
      />
      <FormInput
        element="input"
        type="text"
        name="city"
        placeholder="ville"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="ville non valide"
      />
      {/* <Button variant="primary" onClick={event => registrationClickHandler(event)}>Valider</Button> */}
    </form>
  );
};

export default NewPlace;
