import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ip from "../../../shared/ip/Ip";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../shared/components/FormInput";
import { AuthContext } from "../../../shared/auth/AuthContext";
import ImageUpload from "../../../shared/components/ImageUpload";
import {
  VALIDATOR_REQUIRE
} from "../../../shared/validators/Validators";
import "../../../shared/css/forms.css";

const AddNews = () => {
  const Auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm({
    author: {
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
    url: {
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
  });
  console.log('formState', formState)
  const handleClick = event => {
    event.preventDefault();

    // shapping tags into array with removal of special charatcers space and uppecase
    let ponctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let tags = formState.inputs.tags.value
      .toLowerCase()
      .trim()
      .split(" ");
    tags = tags.filter(item => item.length > 2 && item !== ponctuation);

    const formData = new FormData();
    formData.append("author", formState.inputs.author.value);
    formData.append("title", formState.inputs.title.value);
    formData.append("punchline", formState.inputs.punchline.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("url", formState.inputs.url.value);
    formData.append("tags", tags);
    formData.append("image", formState.inputs.image.value);
    formData.append("userId", Auth.user._id);

    fetch(`${ip}/news`, {
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
          <p className="text-center SharedFormTitle">AJOUTER UNE NEWS</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleClick}>
            <FormInput
              name="author"
              element="input"
              initialValue={formState.inputs.author.value}
              initialValidate={formState.inputs.author.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Type non valide"
              type="text"
              onInput={inputHandler}
              placeholder="Auteur"
            />

            <FormInput
              name="title"
              element="input"
              initialValue={formState.inputs.title.value}
              initialValidate={formState.inputs.title.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Titre non valide"
              type="text"
              onInput={inputHandler}
              placeholder="Titre"
            />
            <FormInput
              name="punchline"
              element="input"
              initialValue={formState.inputs.punchline.value}
              initialValidate={formState.inputs.punchline.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Punchline non valide"
              type="text"
              onInput={inputHandler}
              placeholder="Punchline"
            />
            <FormInput
              name="description"
              element="input"
              initialValue={formState.inputs.description.value}
              initialValidate={formState.inputs.description.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Description non valide"
              type="text"
              onInput={inputHandler}
              placeholder="Description"
            />
            <FormInput
              name="url"
              element="input"
              initialValue={formState.inputs.url.value}
              initialValidate={formState.inputs.url.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Site web non valide"
              type="text"
              onInput={inputHandler}
              placeholder="Votre site web"
            />

            <FormInput
              name="tags"
              element="input"
              initialValue={formState.inputs.tags.value}
              initialValidate={formState.inputs.tags.isValid}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Tags non valides"
              type="text"
              onInput={inputHandler}
              placeholder="Tags"
            />
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Votre Image n'est pas valide"
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

export default AddNews;
