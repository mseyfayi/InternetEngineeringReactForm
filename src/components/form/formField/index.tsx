import {fieldType} from "../../../global/types";
import React from "react";
import FormFieldInput from "./FormFiledInput";

interface PropsType {
    field: fieldType
}

const FormField = ({field}: PropsType) =>
    <FormFieldInput type={field.type} field={field}/>;
export default FormField
