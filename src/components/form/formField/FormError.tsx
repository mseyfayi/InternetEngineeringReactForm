import React from "react";
import {Typography} from "@material-ui/core";

interface PropsType {
    error: string | null;
    touched: boolean;
}

const FormField = ({touched, error}: PropsType) =>
    (touched && error) ? <Typography variant='caption' color='error'>* {error}</Typography> : null;

export default FormField;
