import React from "react";
import {fieldType} from "../../global/types";
import FormField from './formField';

interface PropsType {
    fields: Array<fieldType>;
}

const FormDetail = ({fields}: PropsType) =>
    <>
        {fields.map(item =>
            <FormField key={item.name} field={item}/>
        )}
    </>;

export default FormDetail

