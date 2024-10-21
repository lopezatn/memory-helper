import React from 'react';

const Button = ({value, type, onClick}) => {

    return (
    <>
        <input value={value} type={type} onClick={onClick}/>
    </>
    );
}

export default Button;