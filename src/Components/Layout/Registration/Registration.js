import React, { useCallback, useReducer } from "react";
import { Button } from "react-bootstrap";
import FormInput from "./formInput";
// import ip from "../../../Hoc/ip";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../Util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputName in state.inputs) {
        if (inputName === action.inputName) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputName].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputName]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};



const NewUser = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
      adress: {
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
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((name, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputName: name,
      value: value,
      isValid: isValid
    });
  }, []);

  const registrationClickHandler = event => {
    event.preventDefault()
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
  }

  return (
    <form className="place-form" onSubmit={registrationClickHandler}>
      <FormInput
        element="input"
        type="text"
        name="firstname"
        placeholder="Prénom"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="prénom non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="name"
        placeholder="Nom"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="nom non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="email"
        name="email"
        placeholder="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="email non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="password"
        placeholder="mot de passe"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="mot de passe non valide : 8 à 16 caractères avec une majuscule, un chiffre et un caractère spécial"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="phone"
        placeholder="téléphone"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="téléphone non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="adress"
        placeholder="adresse"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="adresse non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="zipcode"
        placeholder="code postal"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="code postal non valide"
        onInput={inputHandler}
      />
      <FormInput
        element="input"
        type="text"
        name="city"
        placeholder="ville"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="ville non valide"
        onInput={inputHandler}
      />
      <Button type="submit" variant="primary" disabled={!formState.isValid}>S'inscrire</Button>
    </form>
  );
};

export default NewUser;
