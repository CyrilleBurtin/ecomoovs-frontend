import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ip from "../../../shared/ip/Ip";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../shared/components/FormInput";
import { AuthContext } from "../../../shared/auth/AuthContext";
import ImageUpload from "../../../shared/components/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../../shared/validators/Validators";
import "../../../shared/css/forms.css";

const MoovSubmit = () => {
  const Auth = useContext(AuthContext);

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
      value: [],
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

  const handleClick = event => {
    event.preventDefault();

    // shapping tags into array with removal of special charatcers space and uppecase
    let ponctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let tags = formState.inputs.tags.value.toLowerCase().trim().split(" ");
    tags = tags.filter(item => item.length > 2 && item != ponctuation);

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
    formData.append("tags", tags);
    formData.append("image", formState.inputs.image.value);
    formData.append("facebook", formState.inputs.facebook.value);
    formData.append("instagram", formState.inputs.instagram.value);
    formData.append("twitter", formState.inputs.twitter.value);
    formData.append("userId", Auth.user._id);

    fetch(`${ip}/moovs`, {
      method: "POST",
      body: formData,
      headers: { authorization: `Bearer ${Auth.token}` }
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
    <Container fluid className="SharedForm">
      <Row>
        <Col className="SharedFormHeader">
          <p className="text-center SharedFormTitle">INSCRIPTION</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleClick}>
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
            <FormInput
              element="input"
              initialValue={formState.inputs.address.value}
              initialValidate={formState.inputs.address.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Adresse non valide"
              type="text"
              zipcode
              name="address"
              onInput={inputHandler}
              placeholder="adresse"
            />
            <FormInput
              element="input"
              initialValue={formState.inputs.zipcode.value}
              initialValidate={formState.inputs.zipcode.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Code postal non valide"
              type="text"
              name="zipcode"
              onInput={inputHandler}
              placeholder="Code postal"
            />
            <FormInput
              element="input"
              initialValue={formState.inputs.city.value}
              initialValidate={formState.inputs.city.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Ville non valide"
              type="text"
              name="city"
              onInput={inputHandler}
              placeholder="Ville"
            />
            <FormInput
              element="select"
              initialValue={formState.inputs.country.value}
              initialValidate={formState.inputs.country.isValid}
              autocomlpete="country"
              type="select"
              name="country"
              onInput={inputHandler}
              validators={[]}
            />
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
            <FormInput
              element="input"
              initialValue={formState.inputs.url.value}
              initialValidate={formState.inputs.url.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Site web non valide"
              type="text"
              name="url"
              onInput={inputHandler}
              placeholder="Votre site web"
            />
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
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Votre Image n'est pas valide"
            />
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
            <Button
              type="submit"
              variant="primary"
              style={{
                margin: "50px Auto",
                textAlign: "center",
                display: "block"
              }}
              disabled={!formState.isValid}
            >
              Valider
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default MoovSubmit;
