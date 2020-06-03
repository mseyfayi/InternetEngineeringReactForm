import React from 'react';
import {TextField} from "@material-ui/core";
import FormLocationDialog from './FormLocationDialog'
import {IFormInputPropsType, latLng} from "../../../global/types";

interface PropsType extends IFormInputPropsType {
    value: latLng | null;
}

const FormFieldInputLocation = ({name, title, value, onChange}: IFormInputPropsType) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <>
            <TextField
                InputLabelProps={{shrink: (!!value)}}
                label={title}
                id={name}
                value={value && `(${value.lat} ${value.lng})`}
                onClick={handleOpen}
            />
            <FormLocationDialog save={onChange} onClose={handleClose} open={open}/>
        </>
    );
};
export default FormFieldInputLocation
