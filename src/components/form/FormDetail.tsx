import React, {useState} from "react";
import {fieldType, IFormInputValuesType} from "../../global/types";
import FormField from './formField';

interface PropsType {
    fields: Array<fieldType>;
}

type stateType = {
    [key: string]: IFormInputValuesType;
}

const FormDetail = ({fields}: PropsType) => {
    const [state, setState] = useState<stateType>(fields.reduce((obj, field) => ({...obj, [field.name]: null}), {}));

    const getHandleChange = (name: string) => (value: IFormInputValuesType) => setState({...state, [name]: value});

    const getValue = (name: string): IFormInputValuesType => state[name];

    return <div className='flex-1 flex-column'>
        {fields.map(item =>
            <FormField
                {...item}
                key={item.name}
                value={getValue(item.name)}
                onChange={getHandleChange(item.name)}
            />
        )}
    </div>;
};

export default FormDetail

