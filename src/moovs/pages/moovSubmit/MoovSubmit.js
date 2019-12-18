import React, { useState, useEffect, useContext } from "react";
import { Col, Form, Button } from "react-bootstrap";
import ip from "../../../shared/ip/Ip";
import { AuthContext } from "../../../shared/auth/AuthContext";
import { useForm } from "../../../shared/hooks/Form-hook";
import FormInput from "../../../users/components/FormInput";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../../../shared/validators/Validators";

const  MoovSubmit = props => {
  const Auth = useContext(AuthContext);
  
  const [img, setImg] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const [formState, inputHandler] = useForm({
    type: {
      value: "",
      isValid: false
    },
    name: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
    phone: {
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
    cgu: {
      value: false,
      isValid: false
    },
    userId: {
      value: Auth.user._id,
      isValid: true
    } 
  });


    const handleClick = () => {
    fetch(`${ip}/moovs/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formState
      })
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

  const handleImageChange = photo => {
    //var file = photo.target;

    var reader = new FileReader();

    reader.onload = () => {
      var fileUri = reader.result;
      setImg({ uri: fileUri });
    };

    reader.onloadend = () => console.log(img);

    //   formData.append('photo', );

    //   for (var key in photo) {
    //     console.log(key, photo[key]);
    //     formData.append(key, photo[key]);
    // }

    //   fetch(`${ip}moovs/photo`, {
    //     method: 'post',
    //     body: FormData
    //   })
  };

  useEffect(() => {
    if (img.imagePreviewUrl) {
      setImagePreview(<img src={img.imagePreviewUrl} alt="preview" />);
    } else {
      setImagePreview(
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
  }, [img]);

  return (
    <Form>
      <Form.Row>Ajouter un moov</Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="Type">
          <Form.Label>Type</Form.Label>
          <FormInput
            element="input"
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
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Adresse non valide"
            type="text"
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
              autocomlpete="country"
              type="select"
              name="country"
              onInput={inputHandler}
            ></FormInput>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <FormInput
              element="input"
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
              errorText=""
              type="tel"
              name="phone"
              onInput={inputHandler}
              placeholder="Téléphone"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Url">
            <Form.Label>Site web</Form.Label>
            <FormInput
              element="input"
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
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Titre non valide"
              type="text"
              name="title"
              onInput={inputHandler}
              placeholder="Titre"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="PunchLine">
            <Form.Label>Punchline</Form.Label>
            <FormInput
              element="input"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Punchline non valide"
              type="text"
              name="punchLine"
              onInput={inputHandler}
              placeholder="Punchline"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Desc">
            <Form.Label>Description</Form.Label>
            <FormInput
              element="input"
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
              errorText="Numéro de société non valide"
              type="text"
              name="regNumber"
              onInput={inputHandler}
              placeholder="RegNumber"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Tags">
            <Form.Label>Tags</Form.Label>
            <FormInput
              element="input"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Tags non valides"
              type="text"
              name="tags"
              onInput={inputHandler}
              placeholder="Tags"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="image">
            <Form.Label>Image</Form.Label>
            <FormInput
              element="input"
              type="file"
              onInput={e => handleImageChange(e)}
              placeholder="Ajouter une photo"
            />
            <div>{imagePreview}</div>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Facebook">
            <Form.Label>Facebook</Form.Label>
            <FormInput
              element="input"
              errorText=""
              type="text"
              name="facebook"
              onInput={inputHandler}
              placeholder="Facebook"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Instagram">
            <Form.Label>Instagram</Form.Label>
            <FormInput
              element="input"              
              errorText=""
              type="text"
              name="instagram"
              onInput={inputHandler}
              placeholder="Instagram"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Twitter">
            <Form.Label>Twitter</Form.Label>
            <FormInput
              element="input"
              errorText=""
              type="text"
              name="twitter"
              onInput={inputHandler}
              placeholder="Twitter"
            />
          </Form.Group>
        </Form.Row>
      </Form.Row>

      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
}

export default MoovSubmit;
