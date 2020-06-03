import React, {useState} from "react";
import {fieldType, IFormInputValuesType} from "../../global/types";
import FormField from './formField';
import {Button} from '@material-ui/core';

interface PropsType {
    fields: Array<fieldType>;
}

type stateType = {
    [key: string]: IFormInputValuesType;
}

type errorType = {
    [key: string]: string | null;
}

const FormDetail = ({fields}: PropsType) => {
    const [values, setValues] = useState<stateType>(fields.reduce((obj, field) => ({...obj, [field.name]: null}), {}));
    const [errors, setErrors] = useState<errorType>(fields.reduce((obj, field) => ({...obj, [field.name]: null}), {}));

    const getValue = (name: string): IFormInputValuesType => values[name];
    const getError = (name: string): string | null => errors[name];

    const getHandleChange = (name: string) => (value: IFormInputValuesType) => setValues({...values, [name]: value});
    const getHandleError = (name: string) => (error: string | null) => setErrors({...errors, [name]: error});

    const submit = () => {
        fields
            .filter(item => item.required)
            .map(item => item.name)
            .filter(name => !getValue(name))
            .forEach(name => getHandleError(name)('required'))
    };

    return (
        <div className='flex-1 flex-column'>
            {fields.map(item =>
                <FormField
                    {...item}
                    key={item.name}
                    value={getValue(item.name)}
                    error={getError(item.name)}
                    onChange={getHandleChange(item.name)}
                />
            )}
            <Button
                color="primary"
                variant="contained"
                className='m-1 mt-5 align-self-start col-5'
                onClick={submit}
            >
                Submit
            </Button>
        </div>
    );
};

export default FormDetail

