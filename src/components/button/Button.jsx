import React from 'react';

const Button = ({className, value, type, onClick}) => {

    return (
    <>
        <input className={className} value={value} type={type} onClick={onClick}/>
    </>
    );
}

export default Button;