import 'date-fns';
import {IFormInputPropsType} from "../../../global/types";
import React from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface PropsType extends IFormInputPropsType {
    value: Date | null;

    onChange(value: Date | null): void;
}

const dateFormat = "yyyy/MM/dd";

const FormFieldInputText = ({name, required, title, value, onChange, onBlur}: PropsType) => {
    const handleDateChange = (date: Date | null) => {
        onChange(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                required={required}
                disableToolbar
                variant="inline"
                format={dateFormat}
                id={name}
                label={title}
                value={value}
                onBlur={onBlur}
                invalidDateMessage={`Date Format is ${dateFormat}`}
                minDate={new Date('0000-00-00')}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>);
};
export default FormFieldInputText
