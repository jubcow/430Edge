import React from 'react';

// use for more complicated nestings instead of div
const Aux = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Aux;