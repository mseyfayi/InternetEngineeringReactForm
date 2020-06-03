import React from 'react';
import {TextField} from "@material-ui/core";
import FormLocationDialog from './FormLocationDialog'
import {IFormInputPropsType} from "../../../global/types";


const FormFieldInputLocation = ({name, title, value, onChange}: IFormInputPropsType) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <TextField
                id={name}
                label={title}
                value={value}
                disabled
                onClick={handleOpen}
            />
            <FormLocationDialog save={() => {
                //todo
            }} onClose={handleClose} open={open}/>
        </div>
    );
};
export default FormFieldInputLocation
