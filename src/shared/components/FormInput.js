import React, { useReducer, useEffect } from "react";
import { validate } from "../../shared/validators/Validators";
import "./FormInput.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCHED":
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const FormInput = props => {
  
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValidate || false,
    touched: false
  });

  const { name, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(name, value, isValid);
  }, [name, value, isValid, onInput]);

  const formChangeHandler = event => {
    dispatch(
      {
        type: "CHANGE",
        val: event.target.value,
        validators: props.validators
      },
      []
    );
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCHED"
    });
  };

  const element =
    props.element === "input" ? (
      <input
        autoComplete={props.autocomplete}
        type={props.type}
        name={props.name}
        onChange={formChangeHandler}
        placeholder={props.placeholder}
        onBlur={touchHandler}
        className="FormInput"
      />
    ) : props.element === "select" ? (
      <select name={props.name} onChange={formChangeHandler} type={props.type}>
        <option>France</option>
        <option>Belgique</option>
        <option>Suisse</option>
        <option>Luxembourg</option>
        <option>Monaco</option>
      </select>
    ) : null;

  return (
    <div
      className={`form-control ${!inputState.isValid &&
        inputState.touched &&
        "form-control--invalid"}`}
    >
      {element}
      {!inputState.isValid && inputState.touched ? (
        <p style={{ marginTop: "5px" }}>{props.errorText}</p>
      ) : null}
    </div>
  );
};

export default FormInput;
