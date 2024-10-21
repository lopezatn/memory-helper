import React from 'react';

const InputField = ({placeholder, onChange}) => {
    


    return (
        <label className="">
            <input className='text-center' onChange={onChange} placeholder={placeholder}/>
        </label>
    )
}

export default InputField;