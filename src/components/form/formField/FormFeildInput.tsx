import {fieldTypesEnum, IFormInputPropsType, latLng} from "../../../global/types";
import React from "react";
import FormFieldInputText from "./FormFeildInputText";
import FormFieldInputLocation from "./FormFieldInputLocation";
import FormFieldInputDate from "./FormFieldInputDate"
import FormFieldInputSelect from "./FormFieldInputSelect";

const FormFieldInput = ({...props}: IFormInputPropsType) => {
    if (props.options)
        return <FormFieldInputSelect  {...props} options={props.options}/>;

    switch (props.type) {
        case fieldTypesEnum.Date:
            return <FormFieldInputDate  {...props} value={props.value as Date | null}/>;
        case fieldTypesEnum.Location:
            return <FormFieldInputLocation  {...props} value={props.value as latLng | null}/>;
        case fieldTypesEnum.Text:
            return <FormFieldInputText   {...props} value={props.value as string | number}/>;
        case fieldTypesEnum.Number:
            return <FormFieldInputText  {...props} value={props.value as string | number} isNumber/>;
        default:
            return null;
    }
};

export default FormFieldInput
