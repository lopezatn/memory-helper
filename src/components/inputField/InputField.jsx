import React from 'react';

const InputField = ({onChange, onKeyDown, placeholder}) => {
    


    return (
        <label className="">
            <input className='text-center' onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder}/>
        </label>
    )
}

export default InputField;