import React, { useReducer, useEffect } from "react";

import { validate } from "../../Util/validators";
import "./Registration.css";

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
    value: props.value || "",
    isValid: props.valid || false,
    touched: false
  });

  const { name, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(name, value, isValid);
  }, [name, value, isValid, onInput]);

  const formChangeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    },[]);
  }

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
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textrea
        type={props.type}
        name={props.name}
        onChange={formChangeHandler}
        placeholder={props.placeholder}
        value={inputState.value}
        rows={props.rows || 3}
      />
    );

  return (
    <div
      className={`form-control ${!inputState.isValid &&
        inputState.touched &&
        "form-control--invalid"}`}
      style={{ marginTop: "50px" }}
    >
      {element}
      {!inputState.isValid && inputState.touched && <p>{props.errorText}</p>}
    </div>
  );
};

export default FormInput;
