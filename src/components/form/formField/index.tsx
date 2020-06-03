import {IFormFieldPropsType} from "../../../global/types";
import React from "react";
import FormFieldInput from "./FormFeildInput";
import FormError from "./FormError";

const FormField = ({error, touched, ...props}: IFormFieldPropsType) =>
    <>
        <FormFieldInput {...props}/>
        <FormError error={error} touched={touched}/>
    </>;

export default FormField
