import {Button, CircularProgress, PropTypes} from "@material-ui/core";
import React, {ReactNode} from "react";

interface Props {
    isLoading: boolean;
    children: ReactNode;
    className?: string;
    color?: PropTypes.Color;

    onClick(...args: any): void;
}

const MyButton = ({isLoading, children, onClick, className, color = "primary"}: Props) =>
    isLoading ?
        <CircularProgress/> :
        <Button
            color={color}
            variant="contained"
            className={'m-1 mt-5 align-self-start col-5 ' + className}
            onClick={onClick}
        >
            {children}
        </Button>;

export default MyButton
