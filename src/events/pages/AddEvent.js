import React, { useContext } from 'react';

import ip from '../../shared/ip/Ip';
import { AuthContext } from '../../shared/auth/AuthContext';
import { useForm } from '../../shared/hooks/Form-hook';
import FormInput from '../../shared/components/FormInput';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from '../../shared/validators/Validators';
import '../../shared/css/forms.css';
import BlueButton from '../../shared/uiElements/BlueButton';

const AddEvent = () => {
  const Auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm({
    name: {
      value: '',
      isValid: false
    },
    punchline: {
      value: '',
      isValid: false
    },
    dateIn: {
      value: '',
      isValid: false
    },
    dateOut: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    zipcode: {
      value: '',
      isValid: false
    },
    address: {
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
    }
  });

  const handleClick = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`${ip}/event/`, {
        method: 'POST',
        headers: { authorization: `Bearer ${Auth.token}` },
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
      });
      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className='SharedForm'>
      <div className='SharedFormHeader'>
        <p className='text-center SharedFormTitle'>AJOUTER UN ÉVÉNEMENT</p>
      </div>

      <div className='pt-5 pb-5'>
        <form onSubmit={handleClick}>
          {/* name */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.name.value}
              initialValidate={formState.inputs.name.isValid}
              type='text'
              name='name'
              onInput={inputHandler}
              placeholder='Nom'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Nom non valide'
            />
          </div>

          {/* PunchLine */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.punchline.value}
              initialValidate={formState.inputs.punchline.isValid}
              type='text'
              name='punchline'
              onInput={inputHandler}
              placeholder='Punchline'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Punchline non valide'
            />
          </div>

          {/* dateIn */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.dateIn.value}
              initialValidate={formState.inputs.dateIn.isValid}
              type='date'
              name='dateIn'
              onInput={inputHandler}
              placeholder='Date de début'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Date non valide'
            />
          </div>

          {/* dateOut */}

          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.dateOut.value}
              initialValidate={formState.inputs.dateOut.isValid}
              type='date'
              name='dateOut'
              onInput={inputHandler}
              placeholder='Date de fin'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Date non valide'
            />
          </div>

          {/* Descritpion */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.description.value}
              initialValidate={formState.inputs.description.isValid}
              as='textarea'
              rows='10'
              name='description'
              onInput={inputHandler}
              placeholder='Description'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Description non valide'
            />
          </div>

          {/* email */}

          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.email.value}
              initialValidate={formState.inputs.email.isValid}
              autoComplete='email'
              type='email'
              name='email'
              onInput={inputHandler}
              placeholder='Email'
              validators={[VALIDATOR_EMAIL()]}
              errorText='Email non valide'
            />
          </div>

          {/* phone */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.phone.value}
              initialValidate={formState.inputs.phone.isValid}
              type='tel'
              name='phone'
              onInput={inputHandler}
              placeholder='Téléphone'
              validators={[]}
              errorText='téléphone non valide'
            />
          </div>

          {/* adresse */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.address.value}
              initialValidate={formState.inputs.address.isValid}
              autoComplete='address-line1'
              name='address'
              onInput={inputHandler}
              placeholder='adresse'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Adresse non valide'
            />
          </div>

          {/* zipcode */}
          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.zipcode.value}
              initialValidate={formState.inputs.zipcode.isValid}
              autoComplete='postal-code'
              name='zipcode'
              onInput={inputHandler}
              placeholder='Code Postal'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Code postal non valide'
            />
          </div>

          {/* city */}

          <div>
            <FormInput
              element='input'
              initialValue={formState.inputs.city.value}
              initialValidate={formState.inputs.city.isValid}
              autoComplete='address-level2'
              name='city'
              onInput={inputHandler}
              placeholder='Ville'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Ville non valide'
            />
          </div>

          {/* country */}
          <div>
            <FormInput
              element='select'
              initialValue={formState.inputs.country.value}
              initialValidate={formState.inputs.country.isValid}
              as='select'
              name='country'
              onInput={inputHandler}
              validators={[]}
              errorText='Ville non valide'
            />
          </div>

          <BlueButton type='submit' disabled={!formState.isValid}>
            Valider
          </BlueButton>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
