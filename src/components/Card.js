import React from 'react'

function Card(props) {

    return(
        <div>
            <h1>{props.item.name}
            </h1>
            <p>{props.item.content}</p>
            <p>{props.item.price}</p>
        </div>
    )
}

export default Card