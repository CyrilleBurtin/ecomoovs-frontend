import React, { useState, useEffect } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import ip from "../../../Hoc/ip"
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

function MoovSubmit(props) {

    const [userData, setUserData] = useState(false)

    const [moov, setMoov] = useState({
        country: "France",
        userId: ""
    })

    useEffect(() => {
        const getUser = () => {
            let localToken = localStorage.getItem('AUTH_TOKEN')
            if (localToken) {
                let decodedUser = (jwtDecode(localToken))
                if (decodedUser.exp > Date.now() / 1000) {
                    setUserData({
                        user: decodedUser.user,
                        token: localToken
                    })
                }
            } else {
                return false
            }
        }
        getUser()
    }, [])

    useEffect(() => {
        const updateMoov = () => {
            if (userData) {
                setMoov({ ...moov, userId: userData.user._id })
            }
        }
        updateMoov()
        
    }, [userData, setMoov, moov])


const [img, setImg] = useState({})
const [imagePreview, setImagePreview] = useState(null)


const formHandler = e => {
    const { name, value } = e.target
    setMoov({ ...moov, [name]: value })
}


const handleClick = () => {

    fetch(`${ip}/moovs/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            moov
        })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Request failed', error)
        });
}


const handleImageChange = (photo) => {

    //var file = photo.target;

    var reader = new FileReader();

    reader.onload = () => {
        var fileUri = reader.result;
        setImg({ uri: fileUri })
    }

    reader.onloadend = () => (
        console.log(img)
    )





    //   formData.append('photo', );

    //   for (var key in photo) {
    //     console.log(key, photo[key]);
    //     formData.append(key, photo[key]);
    // }


    //   fetch(`${ip}moovs/photo`, {
    //     method: 'post',
    //     body: FormData
    //   })


}


useEffect(() => {
    if (img.imagePreviewUrl) {
        setImagePreview(<img src={img.imagePreviewUrl} alt="preview" />);
    } else {
        setImagePreview(<div className="previewText">Please select an Image for Preview</div>);
    }
}, [img])


return (
    <Form>
        <Form.Row>
            Ajouter un moov
            </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="Type">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" name="type" onChange={formHandler} placeholder="Type" />
            </Form.Group>

            <Form.Group as={Col} controlId="name">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="name" onChange={formHandler} placeholder="Nom" />
            </Form.Group>
        </Form.Row>


        <Form.Row>
            <Form.Group controlId="Address">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" onChange={formHandler} name="address" placeholder="5 rue des Peupliers" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="Zip">
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control typse="text" name="zipcode" onChange={formHandler} />
                </Form.Group>

                <Form.Group as={Col} controlId="City">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" name="city" onChange={formHandler} />
                </Form.Group>

                <Form.Group as={Col} controlId="State">
                    <Form.Label>Pays</Form.Label>
                    <Form.Control as="select" name="country" onChange={formHandler}>
                        <option>France</option>
                        <option>Belgique</option>
                        <option>Suisse</option>
                        <option>Luxembourg</option>
                        <option>Monaco</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={formHandler} placeholder="Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="Phone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="tel" name="phone" onChange={formHandler} placeholder="Téléphone" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="Url">
                    <Form.Label>Site web</Form.Label>
                    <Form.Control type="text" name="url" onChange={formHandler} placeholder="https://monsite.com " />
                </Form.Group>

                <Form.Group as={Col} controlId="Title">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text" name="title" onChange={formHandler} placeholder="Titre" />
                </Form.Group>

                <Form.Group as={Col} controlId="PunchLine">
                    <Form.Label>Puncline</Form.Label>
                    <Form.Control type="text" name="punchLine" onChange={formHandler} placeholder="Punchline" />
                </Form.Group>

                <Form.Group as={Col} controlId="Desc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" onChange={formHandler} placeholder="Description" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="RegNumber">
                    <Form.Label>Numéro Siret/Siren</Form.Label>
                    <Form.Control type="text" name="regNumber" onChange={formHandler} placeholder="RegNumber" />
                </Form.Group>

                <Form.Group as={Col} controlId="Tags">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control type="text" name="tags" onChange={formHandler} placeholder="Tags" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={e => handleImageChange(e)} placeholder="Ajouter une photo" />
                    <div>{imagePreview}</div>
                </Form.Group>
            </Form.Row>


            <Form.Row>
                <Form.Group as={Col} controlId="Facebook">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control type="text" name="facebook" onChange={formHandler} placeholder="Facebook" />
                </Form.Group>

                <Form.Group as={Col} controlId="Instagram">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control type="text" name="instagram" onChange={formHandler} placeholder="Instagram" />
                </Form.Group>

                <Form.Group as={Col} controlId="Twitter">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control type="text" name="twitter" onChange={formHandler} placeholder="Twitter" />
                </Form.Group>
            </Form.Row>

        </Form.Row>


        <Button variant="primary" onClick={handleClick}>
            Submit
            </Button>

    </Form>


)

}

const mapStateToProps = state => {
    return {
        userData: state
    }
}

export default (connect(
    mapStateToProps,
    null
)(MoovSubmit))
