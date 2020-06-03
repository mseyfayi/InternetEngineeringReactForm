import {IFormInputPropsType, optionType} from "../../../global/types";
import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

interface PropsType extends IFormInputPropsType {
    options: Array<optionType>;
}

const FormFieldInputSelect = ({name, title, value, required, onChange, options}: PropsType) => {

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => onChange(event.target.value as string);

    return <FormControl>
        <InputLabel id={name + 'label'}>{title}</InputLabel>
        <Select
            required={required}
            labelId={name + 'label'}
            id={name}
            value={value}
            onChange={handleChange}
        >
            {options.map(option =>
                <MenuItem key={option.value} value={option.value} button={false}>{option.label}</MenuItem>
            )}
        </Select>
    </FormControl>;
};
export default FormFieldInputSelect
