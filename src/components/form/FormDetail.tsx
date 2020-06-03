import React from "react";
import {fieldType} from "../../global/types";
import FormField from './formField';

interface PropsType {
    fields: Array<fieldType>;
}

const FormDetail = ({fields}: PropsType) =>
    <div className='flex-1 flex-column'>
        {fields.map(item =>
            <FormField key={item.name} field={item}/>
        )}
    </div>;

export default FormDetail

