import React, { useContext } from "react";
import { Col, Form, Button } from "react-bootstrap";
import ip from "../../../shared/ip/Ip";
import { AuthContext } from "../../../shared/auth/AuthContext";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../users/components/FormInput";
import ImageUpload from "../../../users/components/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../../shared/validators/Validators";
const MoovSubmit = props => {
  const Auth = useContext(AuthContext);
  console.log('Auth', Auth)
  const [formState, inputHandler] = useForm({
    type: {
      value: "",
      isValid: false
    },
    name: {
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
    email: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    url: {
      value: "",
      isValid: false
    },
    title: {
      value: "",
      isValid: false
    },
    punchline: {
      value: "",
      isValid: false
    },
    description: {
      value: "",
      isValid: false
    },
    regNumber: {
      value: "",
      isValid: false
    },
    tags: {
      value: "",
      isValid: false
    },
    image: {
      value: null,
      isValid: false
    },
    facebook: {
      value: "",
      isValid: true
    },
    instagram: {
      value: "",
      isValid: true
    },
    twitter: {
      value: "",
      isValid: true
    }
  });

  const handleClick = (event) => {

    event.preventDefault();

    const formData = new FormData();
    formData.append("type", formState.inputs.type.value);
    formData.append("name", formState.inputs.name.value);
    formData.append("address", formState.inputs.address.value);
    formData.append("zipcode", formState.inputs.zipcode.value);
    formData.append("city", formState.inputs.city.value);
    formData.append("country", formState.inputs.country.value);
    formData.append("email", formState.inputs.email.value);
    formData.append("phone", formState.inputs.phone.value);
    formData.append("url", formState.inputs.url.value);
    formData.append("title", formState.inputs.title.value);
    formData.append("punchline", formState.inputs.punchline.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("regNumber", formState.inputs.regNumber.value);
    formData.append("tags", formState.inputs.tags.value);
    formData.append("image", formState.inputs.image.value);
    formData.append("facebook", formState.inputs.facebook.value);
    formData.append("instagram", formState.inputs.instagram.value);
    formData.append("twitter", formState.inputs.twitter.value);
    formData.append("userId", Auth.user._id);
    
    fetch(`${ip}/moovs`, {
      method: "POST",
      body: formData,
      headers: {
        'authorization': `Bearer ${Auth.token}`      
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  return (
    <form type="submit" onSubmit={handleClick} id="moov">
      <Form.Row>Ajouter un moov</Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="Type">
          <Form.Label>Type</Form.Label>
          <FormInput
            element="input"
            initialValue={formState.inputs.type.value}
            initialValidate={formState.inputs.type.isValid}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Type non valide"
            type="text"
            name="type"
            onInput={inputHandler}
            placeholder="Type"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="name">
          <Form.Label>Nom</Form.Label>
          <FormInput
            element="input"
            initialValue={formState.inputs.name.value}
            initialValidate={formState.inputs.name.isValid}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Nom non valide"
            type="text"
            name="name"
            onInput={inputHandler}
            placeholder="Nom"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="Address">
          <Form.Label>Adresse</Form.Label>
          <FormInput
            element="input"
            initialValue={formState.inputs.address.value}
            initialValidate={formState.inputs.address.isValid}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Adresse non valide"
            type="text"
            zipcode
            onInput={inputHandler}
            name="address"
            placeholder="5 rue des Peupliers"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="Zip">
            <Form.Label>Code Postal</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.zipcode.value}
              initialValidate={formState.inputs.zipcode.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Code postal non valide"
              typse="text"
              name="zipcode"
              onInput={inputHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="City">
            <Form.Label>Ville</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.city.value}
              initialValidate={formState.inputs.city.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Ville non valide"
              type="text"
              name="city"
              onInput={inputHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="State">
            <Form.Label>Pays</Form.Label>
            <FormInput
              element="select"
              initialValue={formState.inputs.country.value}
              initialValidate={formState.inputs.country.isValid}
              autocomlpete="country"
              type="select"
              name="country"
              onInput={inputHandler}
              validators={[]}
            ></FormInput>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.email.value}
              initialValidate={formState.inputs.email.isValid}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              errorText="Email non valide"
              type="email"
              name="email"
              onInput={inputHandler}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Phone">
            <Form.Label>Téléphone</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.phone.value}
              initialValidate={formState.inputs.phone.isValid}
              errorText=""
              type="tel"
              name="phone"
              onInput={inputHandler}
              placeholder="Téléphone"
              validators={[]}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Url">
            <Form.Label>Site web</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.url.value}
              initialValidate={formState.inputs.url.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Site web non valide"
              type="text"
              name="url"
              onInput={inputHandler}
              placeholder="https://monsite.com "
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Title">
            <Form.Label>Titre</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.title.value}
              initialValidate={formState.inputs.title.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Titre non valide"
              type="text"
              name="title"
              onInput={inputHandler}
              placeholder="Titre"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Punchline">
            <Form.Label>Punchline</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.punchline.value}
              initialValidate={formState.inputs.punchline.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Punchline non valide"
              type="text"
              name="punchline"
              onInput={inputHandler}
              placeholder="Punchline"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Desc">
            <Form.Label>Description</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.description.value}
              initialValidate={formState.inputs.description.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Description non valide"
              type="text"
              name="description"
              onInput={inputHandler}
              placeholder="Description"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="RegNumber">
            <Form.Label>Numéro Siret/Siren</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.regNumber.value}
              initialValidate={formState.inputs.regNumber.isValid}
              errorText="Numéro de société non valide"
              type="text"
              name="regNumber"
              onInput={inputHandler}
              placeholder="RegNumber"
              validators={[]}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Tags">
            <Form.Label>Tags</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.tags.value}
              initialValidate={formState.inputs.tags.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Tags non valides"
              type="text"
              name="tags"
              onInput={inputHandler}
              placeholder="Tags"
            />
          </Form.Group>
        </Form.Row>

        <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Votre Image n'est pas valide"
        />

        <Form.Row>
          <Form.Group as={Col} controlId="Facebook">
            <Form.Label>Facebook</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.facebook.value}
              initialValidate={formState.inputs.facebook.isValid}
              errorText=""
              type="text"
              name="facebook"
              onInput={inputHandler}
              placeholder="Facebook"
              validators={[]}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Instagram">
            <Form.Label>Instagram</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.instagram.value}
              initialValidate={formState.inputs.instagram.isValid}
              errorText=""
              type="text"
              name="instagram"
              onInput={inputHandler}
              placeholder="Instagram"
              validators={[]}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Twitter">
            <Form.Label>Twitter</Form.Label>
            <FormInput
              element="input"
              initialValue={formState.inputs.twitter.value}
              initialValidate={formState.inputs.twitter.isValid}
              errorText=""
              type="text"
              name="twitter"
              onInput={inputHandler}
              placeholder="Twitter"
              validators={[]}
            />
          </Form.Group>
        </Form.Row>
      </Form.Row>

      <Button type="submit" variant="primary" disabled={!formState.isValid}>
        Valider
      </Button>
    </form>
  );
};

export default MoovSubmit;
