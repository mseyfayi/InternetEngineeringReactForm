import 'date-fns';
import {IFormInputPropsType} from "../../../global/types";
import React from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface PropsType extends IFormInputPropsType {
    value: Date | null;

    onChange(value: Date | null): void;
}

const FormFieldInputText = ({name, title, value, onChange}: PropsType) => {
    const handleDateChange = (date: Date | null) => {
        onChange(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id={name}
                label={title}
                value={value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>);
};
export default FormFieldInputText
