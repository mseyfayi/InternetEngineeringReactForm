import {IFormInputPropsType} from "../../../global/types";
import React from "react";
import {TextField} from '@material-ui/core';

interface PropsType extends IFormInputPropsType {
    isNumber?: boolean;
    value: string | number;

    onChange(value: string | number | null): void;
}

const FormFieldInputText = ({name, required, title, isNumber, value, onChange}: PropsType) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return <TextField
        id={name}
        required={required}
        label={title}
        value={value}
        type={isNumber ? "number" : undefined}
        onChange={handleChange}
    />;
};
export default FormFieldInputText
