import React from 'react';

const Button = ({value, type}) => {
    return (
    <>
        <input value={value} type={type}/>
    </>
    );
}

export default Button;