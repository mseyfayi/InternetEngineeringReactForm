import React, {ReactNode} from "react";
import {Container} from '@material-ui/core';

interface PropsType {
    children: ReactNode
}

const MyContainer = ({children}: (PropsType & any)) =>
    <div className='flex-1 justify-content-center bg-light'>
        <Container maxWidth='md' className='mt-5'>
            {children}
        </Container>
    </div>;
export default MyContainer

