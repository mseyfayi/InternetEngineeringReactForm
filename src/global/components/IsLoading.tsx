import {CircularProgress} from "@material-ui/core";
import React, {ReactNode} from "react";

interface Props {
    isLoading: boolean;
    children: ReactNode
}

const IsLoading = ({isLoading, children}: Props) =>
    isLoading ?
        <div className='d-flex align-items-center'>
            <CircularProgress/>
        </div> :
        <React.Fragment>
            {children}
        </React.Fragment>;

export default IsLoading
