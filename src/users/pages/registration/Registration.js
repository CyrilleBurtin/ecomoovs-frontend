import React, { useState, useContext } from 'react';

import ip from '../../../shared/ip/Ip';
import Loading from '../../../shared/components/Loading';
import { useForm } from '../../../shared/hooks/Form-hook';
import FormInput from '../../../shared/components/FormInput';
import { AuthContext } from '../../../shared/auth/AuthContext';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
  VALIDATOR_CHECKED
} from '../../../shared/validators/Validators';
import '../../../shared/css/forms.css';
import BlueButton from '../../../shared/uiElements/BlueButton';

const NewUser = props => {

  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formState, inputHandler] = useForm(
    {
      firstname: {
        value: '',
        isValid: false
      },
      lastname: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      phone: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      zipcode: {
        value: '',
        isValid: false
      },
      city: {
        value: '',
        isValid: false
      },
      country: {
        value: 'France',
        isValid: true
      },
      cgu: {
        value: false,
        isValid: false
      }
    },
    'user'
  );

  console.log('formState', formState);
  const handleCLick = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${ip}/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      });

      const data = await response.json();
      setIsLoading(false);
      Auth.login(data.token);
      props.history.push('/home');
    } catch (error) {
      console.log('Request failed', error);
    }
  };

  return (
    <div className='SharedForm'>
      <div className='SharedFormHeader'>
        <p className='text-center SharedFormTitle'>INSCRIPTION</p>
      </div>
      
      <div>
        <form
          encType='multipart/form-data'
          onSubmit={handleCLick}
          className='formFlex'
        >
          <FormInput
            autocomplete='given-name'
            element='input'
            initialValue={formState.inputs.firstname.value}
            initialValidate={formState.inputs.firstname.isValid}
            type='text'
            name='firstname'
            placeholder='Prénom'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='prénom non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='family-name'
            element='input'
            initialValue={formState.inputs.lastname.value}
            initialValidate={formState.inputs.lastname.isValid}
            type='text'
            name='lastname'
            placeholder='Nom'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='nom non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='email'
            element='input'
            initialValue={formState.inputs.email.value}
            initialValidate={formState.inputs.email.isValid}
            type='email'
            name='email'
            placeholder='email'
            validators={[VALIDATOR_EMAIL()]}
            errorText='email non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='new-password'
            element='input'
            initialValue={formState.inputs.password.value}
            initialValidate={formState.inputs.password.isValid}
            type='password'
            name='password'
            placeholder='mot de passe'
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
            errorText='10 à 20 caractères avec au moins une majuscule, un chiffre et un caractères spécial : @ $ ! % * ? & '
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='tel'
            element='input'
            initialValue={formState.inputs.phone.value}
            initialValidate={formState.inputs.phone.isValid}
            type='text'
            name='phone'
            placeholder='téléphone'
            validators={[]}
            errorText='téléphone non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='address-line1'
            element='input'
            initialValue={formState.inputs.address.value}
            initialValidate={formState.inputs.address.isValid}
            type='text'
            name='address'
            placeholder='adresse'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='adresse non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='postal-code'
            element='input'
            initialValue={formState.inputs.zipcode.value}
            initialValidate={formState.inputs.zipcode.isValid}
            type='text'
            name='zipcode'
            placeholder='code postal'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='code postal non valide'
            onInput={inputHandler}
          />
          <FormInput
            autocomplete='address-level2'
            element='input'
            initialValue={formState.inputs.city.value}
            initialValidate={formState.inputs.city.isValid}
            type='text'
            name='city'
            placeholder='ville'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='ville non valide'
            onInput={inputHandler}
          />
          <FormInput
            element='select'
            initialValue={formState.inputs.country.value}
            initialValidate={formState.inputs.country.isValid}
            type='select'
            name='country'
            onInput={inputHandler}
            validators={[]}
          />
          <div className='cgu'>
            <FormInput
              element='input'
              initialValidate={formState.inputs.cgu.isValid}
              type='checkbox'
              name='cgu'
              validators={[VALIDATOR_CHECKED()]}
              onInput={inputHandler}
              checked={formState.inputs.cgu.value}
              label="J'ai lu et accepte les CGU"
            />
            <label></label>
          </div>
          {isLoading && <Loading msg='Connexion en cours' />}
          <div style={{textAlign:'center'}}>
          <BlueButton type='submit' disabled={!formState.isValid}>
            S'inscrire
          </BlueButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
