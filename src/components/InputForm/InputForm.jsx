import React, { useState, useEffect } from 'react';
import { WrapperInputStyle } from './styled';

const InputForm = ({ placeholder = 'Nhập text', onChange, value: initialValue, ...rests }) => {
    const [valueInput, setValueInput] = useState(initialValue || '');

    useEffect(() => {
        setValueInput(initialValue || '');
    }, [initialValue]);

    const handleChange = (e) => {
        setValueInput(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <WrapperInputStyle
            placeholder={placeholder}
            value={valueInput}
            onChange={handleChange}
            {...rests}
        />
    );
};

export default InputForm;
