import React from 'react';

const Speaker = props => {
    return (
        <>
            <button onClick={props.speak}>Speak</button>
            <div>{props.message}</div>
            <button onClick={props.save}>Save</button>
            <button onClick={props.delete}>Delete</button>
        </>
    )
}

export default Speaker;