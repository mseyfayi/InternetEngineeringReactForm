import {fieldType, fieldTypesEnum} from "../../../global/types";
import React from "react";
import FormFieldInputText from "./FormFeildInputText";
import FormFieldInputLocation from "./FormFieldInputLocation";
import FormFieldInputDate from "./FormFieldInputDate"
import FormFieldInputSelect from "./FormFieldInputSelect";

interface PropsType {
    type: fieldTypesEnum;
    field: fieldType;
}

const FormFieldInput = ({type, field}: PropsType) => {
    if (field.options)
        return <FormFieldInputSelect value={null} {...field} options={field.options} onChange={() => {
        }}/>;

    switch (type) {
        case fieldTypesEnum.Date:
            return <FormFieldInputDate value={null} {...field} onChange={() => {
            }}/>;
        case fieldTypesEnum.Location:
            return <FormFieldInputLocation value={''} {...field} onChange={() => {
            }}/>;
        case fieldTypesEnum.Number:
            return <FormFieldInputText value={''} {...field} onChange={() => {
            }} isNumber/>;
        case fieldTypesEnum.Text:
            return <FormFieldInputText value={''} {...field} onChange={() => {
            }}/>;
        default:
            return null;
    }
};

export default FormFieldInput
