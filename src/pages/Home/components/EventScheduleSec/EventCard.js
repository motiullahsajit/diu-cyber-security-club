import React from 'react'

function EventCard({img, title, description}) {
  return (
    <div>
        <img src={img}/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default EventCard