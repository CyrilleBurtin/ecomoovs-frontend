import React from 'react'

const EventsPage = props => {
   console.log('props', props)
    return (
       <>
        <div>{props.data.name}</div>
       </>
    )
}

export default EventsPage