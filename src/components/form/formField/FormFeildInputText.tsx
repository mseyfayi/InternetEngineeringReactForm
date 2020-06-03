import {fieldType} from "../../../global/types";
import React from "react";
import {TextField} from '@material-ui/core';

interface PropsType extends fieldType {
    value: string;
    isNumber?: boolean;

    onChange(value: string): void;
}

const FormFieldInputText = ({name, title, isNumber, value, onChange}: PropsType) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return <TextField
        id={name}
        label={title}
        value={value}
        type={isNumber ? "number" : undefined}
        onChange={handleChange}
    />;
};
export default FormFieldInputText
