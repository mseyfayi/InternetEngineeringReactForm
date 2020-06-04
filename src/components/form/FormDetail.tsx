import React, {useEffect, useState} from "react";
import {fieldType, IFormInputValuesType} from "../../global/types";
import FormField from './formField';
import {MyButton} from "../../global/components";

export type valuesType = {
    [key: string]: IFormInputValuesType;
}

interface PropsType {
    fields: Array<fieldType>;
    submitIsLoading: boolean;

    submitForm(data: valuesType, callback: (...args: any) => void): void;
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

const FormDetail = ({fields, submitForm, submitIsLoading}: PropsType) => {
    const [values, setValues] = useState<valuesType>(getInitialState(fields, null));
    const [errors, setErrors] = useState<errorType>(getInitialState(fields, null));
    const [touched, setTouched] = useState<touchedType>(getInitialState(fields, false));

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

    useEffect(() => {
        console.log(errors);
        console.log(touched);
        console.log(values);
    }, [values, touched, errors]);

    const clearState = () => {
        setValues(getInitialState(fields, null));
        setErrors(getInitialState(fields, null));
        setTouched(getInitialState(fields, false));
    };

    const submit = () => {
        let isOk = true;
        fields
            .filter(item => item.required)
            .map(item => item.name)
            .filter(name => !values[name])
            .forEach(name => {
                isOk = false;
                getHandleTouched(name)();
                getHandleError(name)('required')
            });

        if (isOk) {
            submitForm(values, clearState);
        }
    };

    return (
        <div className='flex-1 flex-column'>
            {fields.map(({name, ...item}) =>
                <FormField
                    {...item}
                    name={name}
                    key={name}
                    touched={touched[name]}
                    value={values[name]}
                    error={errors[name]}
                    onBlur={getHandleTouched(name)}
                    onChange={getHandleChange(name)}
                />
            )}

            <MyButton onClick={submit} isLoading={submitIsLoading}>
                Submit
            </MyButton>
        </div>
    );
};

export default FormDetail

