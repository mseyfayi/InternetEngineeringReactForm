import React, {useState} from "react";
import {fieldType, IFormInputValuesType} from "../../global/types";
import FormField from './formField';
import {Button} from '@material-ui/core';

export type valuesType = {
    [key: string]: IFormInputValuesType;
}

interface PropsType {
    fields: Array<fieldType>;

    submitForm(data: valuesType, callback: () => void): void;
}

type errorType = {
    [key: string]: string | null;
}

type touchedType = {
    [key: string]: boolean;
}


function getInitialState(fields: Array<fieldType>, initialValue: any) {
    return fields.reduce((obj, field) => ({
        ...obj,
        [field.name]: initialValue
    }), {});
}

const FormDetail = ({fields, submitForm}: PropsType) => {
    const [values, setValues] = useState<valuesType>(getInitialState(fields, null));
    const [errors, setErrors] = useState<errorType>(getInitialState(fields, null));
    const [touched, setTouched] = useState<touchedType>(getInitialState(fields, false));

    const getValue = (name: string): IFormInputValuesType => values[name];
    const getError = (name: string): string | null => errors[name];
    const getTouched = (name: string): boolean => touched[name];

    const getHandleError = (name: string) => (error: string | null) =>
        setErrors(preErrors => ({
            ...preErrors,
            [name]: error
        }));
    const getHandleTouched = (name: string) => () =>
        setTouched(preTouched => ({
            ...preTouched,
            [name]: true
        }));
    const getHandleChange = (name: string) => (value: IFormInputValuesType) => {
        setValues(preValues => ({
            ...preValues,
            [name]: value
        }));
        getHandleError(name)(null);
    };

    const clearState = () => {
        setTimeout(() => {
            setValues(getInitialState(fields, null));
            setErrors(getInitialState(fields, null));
            setTouched(getInitialState(fields, false));
        }, 1000);
    };

    const submit = () => {
        let isOk = true;
        fields
            .filter(item => item.required)
            .map(item => item.name)
            .filter(name => !getValue(name))
            .forEach(name => {
                isOk = false;
                getHandleTouched(name)();
                getHandleError(name)('required')
            });

        if (isOk)
            submitForm(values, clearState);
    };

    return (
        <div className='flex-1 flex-column'>
            {fields.map(({name, ...item}) =>
                <FormField
                    {...item}
                    name={name}
                    key={name}
                    touched={getTouched(name)}
                    value={getValue(name)}
                    error={getError(name)}
                    onBlur={getHandleTouched(name)}
                    onChange={getHandleChange(name)}
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

