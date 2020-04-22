import React, { useState, useContext } from 'react';
import ip from '../../../shared/ip/Ip';
import { useForm } from '../../../shared/hooks/Form-hook';
import FormInput from '../../../shared/components/FormInput';
import { AuthContext } from '../../../shared/auth/AuthContext';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from '../../../shared/validators/Validators';
import '../../../shared/css/forms.css';
import Loading from '../../../shared/components/Loading';
import BlueButton from '../../../shared/uiElements/BlueButton';


const Login = props => {
  
  const Auth = useContext(AuthContext);

  let dest = '/home'
  if ( props.history.location.linkdata){
    dest =  props.history.location.linkdata
  }

  const [isLoading, setIsLoading] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const loginHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${ip}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        })
      });
      const token = await response.json();
      setIsLoading(false);
      Auth.login(token);
      props.history.push(dest);
    } catch (error) {
      console.log(error);
    }
   
  };

 
  return (
    <div className='SharedForm'>
      <div className='SharedFormHeader'>
        <p className='SharedFormTitle'>CONNEXION</p>
      </div>
      <div>
        <form onSubmit={loginHandler} className="formFlex">
          <FormInput
            element='input'
            type='text'
            name='email'
            autocomplete='email'
            placeholder='email'
            errorText='Email non valide'
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
          />
          <FormInput
            element='input'
            type='password'
            name='password'
            autocomplete='current-password'
            placeholder='Mot de passe'
            errorText='Mot de passe non valide'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          />
          {isLoading && <Loading msg='Connexion en cours' />}
          <div style={{textAlign:'center'}}>
          <BlueButton
            type='submit'       
            disabled={!formState.isValid}
          >
            Connexion
          </BlueButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
