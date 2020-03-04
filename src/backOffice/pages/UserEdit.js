import React, { useState, useContext } from 'react';

import ip from '../../shared/ip/Ip';
import { useForm } from '../../shared/hooks/Form-hook';
import FormInput from '../../shared/components/FormInput';
import { AuthContext } from '../../shared/auth/AuthContext';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from '../../shared/validators/Validators';
import Loading from '../../shared/components/Loading';
import '../../shared/css/forms.css';
import BlueButton from '../../shared/uiElements/BlueButton';

const UserEdit = props => {
  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: ''
  });

  const [formState, inputHandler] = useForm(
    {
      firstname: {
        value: Auth.user ? Auth.user.firstname : '',
        isValid: true
      },
      lastname: {
        value: Auth.user ? Auth.user.lastname : '',
        isValid: true
      },
      email: {
        value: Auth.user ? Auth.user.email : '',
        isValid: true
      },
      phone: {
        value: Auth.user ? Auth.user.phone : '',
        isValid: true
      },
      address: {
        value: Auth.user ? Auth.user.location.address : '',
        isValid: true
      },
      zipcode: {
        value: Auth.user ? Auth.user.location.zipcode : '',
        isValid: true
      },
      city: {
        value: Auth.user ? Auth.user.location.city : '',
        isValid: true
      },
      country: {
        value: Auth.user ? Auth.user.location.country : '',
        isValid: true
      },
      cgu: {
        value: 1,
        isValid: true
      }
    },
    true
  );

  if (!Auth.user) {
    props.history.push('/backoffice');
    return false;
  }

  const handleCLick = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${ip}/users/${Auth.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Auth.token}`
        },
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
      });
      const data = await response.json();
      localStorage.setItem('AUTH_TOKEN', JSON.stringify(data));
      setIsLoading(false);
      Auth.login(data.token);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleCurrentPassword = event => {
    setPasswordError(false);
    setPassword({ ...password, currentPassword: event.target.value });
  };

  const handleNewPassword = event => {
    setPassword({ ...password, newPassword: event.target.value });
  };

  const changePassword = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${ip}/users/password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Auth.user._id,
          password: password
        })
      });
      const data = await response.json();
      console.log('data', data);
      setIsLoading(false);
    } catch (error) {
      console.log('mot de passe incorrect', error);
      setPasswordError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className='SharedForm'>
      <div className='SharedFormHeader'>
        <p className='text-center SharedFormTitle'>Mon compte</p>
      </div>

      <div>
        <form encType='multipart/form-data' onSubmit={handleCLick}>
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
          />

          {isLoading && <Loading msg='Inscription en cours...' />}
          <BlueButton type='submit' disabled={!formState.isValid}>
            Enregister les modifications
          </BlueButton>
        </form>
      </div>
      <hr />
      <div style={{ marginTop: '30px' }}>
        {passwordError && (
          <label
            style={{ position: 'absolute', marginTop: '-30px', color: 'red' }}
          >
            Mot de passe actuel incorrect
          </label>
        )}
        <form
          onSubmit={changePassword}
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <input
            placeholder='Mot de passe actuel'
            onChange={handleCurrentPassword}
            className={passwordError ? 'passerror' : ''}
          />
          <input
            placeholder='Nouveau mot de passe'
            onChange={handleNewPassword}
          />
          <BlueButton>Modifier le mot de passe</BlueButton>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
