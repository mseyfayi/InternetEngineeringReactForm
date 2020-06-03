import {fieldType, fieldTypesEnum} from "../../../global/types";
import React from "react";
import FormFieldInputText from "./FormFeildInputText";

interface PropsType {
    isOption: boolean;
    type: fieldTypesEnum;
    field: fieldType;
}

const FormFieldInput = ({isOption, type, field}: PropsType) => {
    if (isOption)
        return <div>options</div>;

    switch (type) {
        case fieldTypesEnum.Date:
            return <div>fieldTypesEnum.Date</div>;
        case fieldTypesEnum.Location:
            return <div>fieldTypesEnum.Location</div>;
        case fieldTypesEnum.Number:
            return <FormFieldInputText value={''} {...field} onChange={()=>{}} isNumber/>;
        case fieldTypesEnum.Text:
            return <FormFieldInputText value={''} {...field} onChange={()=>{}}/>;
        default:
            return null;
    }
};

export default FormFieldInput
