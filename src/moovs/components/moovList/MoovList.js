import React from 'react'
import { ListGroup, Button } from 'react-bootstrap';


const MoovsList = (props) =>
    <ListGroup variant="flush" style={{margin:"auto"}}>
        {props.moovList.map((e, i) => (
            <ListGroup.Item key={i}>
                12 déc 2020 - {e.name} - {e.city}
                <Button>Voir</Button>
            </ListGroup.Item>

        ))}
    </ListGroup>


export default MoovsList