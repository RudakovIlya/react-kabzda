import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputType) => {
    return (
        <input {...props}/>
    );
};

export default Input;