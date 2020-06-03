import {IFormInputPropsType} from "../../../global/types";
import React from "react";
import {TextField} from '@material-ui/core';

const FormFieldInputText = ({name, title, isNumber, value, onChange}: IFormInputPropsType) => {
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
