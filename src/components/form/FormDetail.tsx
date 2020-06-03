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

const FormDetail = ({fields}: PropsType) => {
    const [state, setState] = useState<stateType>(fields.reduce((obj, field) => ({...obj, [field.name]: null}), {}));

    const getHandleChange = (name: string) => (value: IFormInputValuesType) => setState({...state, [name]: value});

    const getValue = (name: string): IFormInputValuesType => state[name];

    const submit = () => {
        console.log(state);
    };

    return (
        <div className='flex-1 flex-column'>
            {fields.map(item =>
                <FormField
                    {...item}
                    key={item.name}
                    value={getValue(item.name)}
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

