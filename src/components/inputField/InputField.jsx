import React from 'react';

const InputField = ({name, value, onChange, onKeyDown, placeholder, maxLength}) => {
    


    return (
        <label className="">
            <input name={name} value={value} className='text-center' onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} maxLength={maxLength}/>
        </label>
    )
}

export default InputField;