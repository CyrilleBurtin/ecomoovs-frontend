import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ip from '../../../shared/ip/Ip';
import { useForm } from '../../../shared/hooks/Form-hook';
import FormInput from '../../../shared/components/FormInput';
import { AuthContext } from '../../../shared/auth/AuthContext';
import ImageUpload from '../../../shared/components/ImageUpload';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from '../../../shared/validators/Validators';
import '../../../shared/css/forms.css';
import Loading from '../../../shared/components/Loading';

const MoovEdit = props => {
  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      _id: {
        value: props.moov._id,
        isValid: true
      },
      type: {
        value: props.moov.type,
        isValid: true
      },
      name: {
        value: props.moov.name,
        isValid: true
      },
      address: {
        value: props.moov.location.address,
        isValid: true
      },
      zipcode: {
        value: props.moov.location.zipcode,
        isValid: true
      },
      city: {
        value: props.moov.location.city,
        isValid: true
      },
      country: {
        value: props.moov.location.country,
        isValid: true
      },
      email: {
        value: props.moov.email,
        isValid: true
      },
      phone: {
        value: props.moov.phone,
        isValid: true
      },
      url: {
        value: props.moov.url,
        isValid: true
      },
      title: {
        value: props.moov.title,
        isValid: true
      },
      punchline: {
        value: props.moov.punchline,
        isValid: true
      },
      description: {
        value: props.moov.description,
        isValid: true
      },
      regNumber: {
        value: props.moov.regNumber,
        isValid: true
      },
      tags: {
        value: props.moov.tags.join(),
        isValid: true
      },
      image: {
        value: props.moov.img.public_id,
        isValid: true
      },
      facebook: {
        value: props.moov.facebook,
        isValid: true
      },
      instagram: {
        value: props.moov.instagram,
        isValid: true
      },
      twitter: {
        value: props.moov.twitter,
        isValid: true
      },
      validated: {
        value: props.moov.validated,
        isValid: true
      }
    },
    true
  );

  const handleClick = event => {
    event.preventDefault();
    setIsLoading(true);
    // shapping tags into array with removal of special charatcers space and uppecase
    let ponctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let tags = formState.inputs.tags.value
      .toLowerCase()
      .trim()
      .split(' ');
    tags = tags.filter(item => item.length > 2 && item !== ponctuation);

    const formData = new FormData();

    formData.append('_id', formState.inputs._id.value);
    formData.append('type', formState.inputs.type.value);
    formData.append('name', formState.inputs.name.value);
    formData.append('address', formState.inputs.address.value);
    formData.append('zipcode', formState.inputs.zipcode.value);
    formData.append('city', formState.inputs.city.value);
    formData.append('country', formState.inputs.country.value);
    formData.append('email', formState.inputs.email.value);
    formData.append('phone', formState.inputs.phone.value);
    formData.append('url', formState.inputs.url.value);
    formData.append('title', formState.inputs.title.value);
    formData.append('punchline', formState.inputs.punchline.value);
    formData.append('description', formState.inputs.description.value);
    formData.append('regNumber', formState.inputs.regNumber.value);
    formData.append('tags', tags);
    formData.append('image', formState.inputs.image.value);
    formData.append('facebook', formState.inputs.facebook.value);
    formData.append('instagram', formState.inputs.instagram.value);
    formData.append('twitter', formState.inputs.twitter.value);
    formData.append('userId', Auth.user._id);

    fetch(`${ip}/moovs`, {
      method: 'PUT',
      body: formData,
      headers: { authorization: `Bearer ${Auth.token}` }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Request failed', error);
      });
  };

  return (
    <Container fluid className='SharedForm'>
      <Row>
        <Col className='SharedFormHeader'>
          <p className='text-center SharedFormTitle'>MODIFIER UN MOOV</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleClick}>
            <FormInput
              name='type'
              element='input'
              initialValue={formState.inputs.type.value}
              initialValidate={formState.inputs.type.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Type non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Type'
            />

            <FormInput
              name='name'
              element='input'
              initialValue={formState.inputs.name.value}
              initialValidate={formState.inputs.name.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Nom non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Nom'
            />
            <FormInput
              name='address'
              element='input'
              initialValue={formState.inputs.address.value}
              initialValidate={formState.inputs.address.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Adresse non valide'
              type='text'
              zipcode
              onInput={inputHandler}
              placeholder='adresse'
            />
            <FormInput
              name='zipcode'
              element='input'
              initialValue={formState.inputs.zipcode.value}
              initialValidate={formState.inputs.zipcode.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Code postal non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Code postal'
            />
            <FormInput
              name='city'
              element='input'
              initialValue={formState.inputs.city.value}
              initialValidate={formState.inputs.city.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Ville non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Ville'
            />
            <FormInput
              name='country'
              element='select'
              initialValue={formState.inputs.country.value}
              initialValidate={formState.inputs.country.isValid}
              autocomlpete='country'
              type='select'
              onInput={inputHandler}
              validators={[]}
            />
            <FormInput
              name='email'
              element='input'
              initialValue={formState.inputs.email.value}
              initialValidate={formState.inputs.email.isValid}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              errorText='Email non valide'
              type='email'
              onInput={inputHandler}
              placeholder='Email'
            />
            <FormInput
              name='phone'
              element='input'
              initialValue={formState.inputs.phone.value}
              initialValidate={formState.inputs.phone.isValid}
              errorText=''
              type='tel'
              onInput={inputHandler}
              placeholder='Téléphone'
              validators={[]}
            />
            <FormInput
              name='url'
              element='input'
              initialValue={formState.inputs.url.value}
              initialValidate={formState.inputs.url.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Site web non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Votre site web'
            />
            <FormInput
              name='title'
              element='input'
              initialValue={formState.inputs.title.value}
              initialValidate={formState.inputs.title.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Titre non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Titre'
            />
            <FormInput
              name='punchline'
              element='input'
              initialValue={formState.inputs.punchline.value}
              initialValidate={formState.inputs.punchline.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Punchline non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Punchline'
            />
            <FormInput
              name='description'
              element='input'
              initialValue={formState.inputs.description.value}
              initialValidate={formState.inputs.description.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Description non valide'
              type='text'
              onInput={inputHandler}
              placeholder='Description'
            />
            <FormInput
              name='regNumber'
              element='input'
              initialValue={formState.inputs.regNumber.value}
              initialValidate={formState.inputs.regNumber.isValid}
              errorText='Numéro de société non valide'
              type='text'
              onInput={inputHandler}
              placeholder='RegNumber'
              validators={[]}
            />
            <FormInput
              name='tags'
              element='input'
              initialValue={formState.inputs.tags.value}
              initialValidate={formState.inputs.tags.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Tags non valides'
              type='text'
              onInput={inputHandler}
              placeholder='Tags ( mots séparés par un espace )'
            />
            <ImageUpload
              id='image'
              onInput={inputHandler}
              errorText="Votre Image n'est pas valide"
            />
            <FormInput
              name='facebook'
              element='input'
              initialValue={formState.inputs.facebook.value}
              initialValidate={formState.inputs.facebook.isValid}
              errorText=''
              type='text'
              onInput={inputHandler}
              placeholder='Facebook'
              validators={[]}
            />
            <FormInput
              name='instagram'
              element='input'
              initialValue={formState.inputs.instagram.value}
              initialValidate={formState.inputs.instagram.isValid}
              errorText=''
              type='text'
              onInput={inputHandler}
              placeholder='Instagram'
              validators={[]}
            />
            <FormInput
              name='twitter'
              element='input'
              initialValue={formState.inputs.twitter.value}
              initialValidate={formState.inputs.twitter.isValid}
              errorText=''
              type='text'
              onInput={inputHandler}
              placeholder='Twitter'
              validators={[]}
            />
            {isLoading && <Loading msg='Enregistrement du moov en cours ...' />}
            <Button
              type='submit'
              variant='primary'
              style={{
                margin: '50px Auto',
                textAlign: 'center',
                display: 'block'
              }}
              disabled={!formState.isValid}
            >
              Valider les modifications
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default MoovEdit;
