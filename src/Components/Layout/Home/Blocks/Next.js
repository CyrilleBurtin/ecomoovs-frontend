import React from 'react'
import { Container } from 'react-bootstrap'
import MoovList from '../../Cards/MoovList'

const Next = (props) => {

    return (
        <Container fluid>

            <p className="mt-5" style={{ fontSize: 60, textAlign: "center", fontWeight: "bolder" }}>Les prochains événements</p>

            <MoovList moovList={props.next} />

        </Container>
    )
}
export default Next
