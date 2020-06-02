import React from "react";
import {Link} from "react-router-dom";
import Header from "../common/Header";

const Form = () => {
    return (
        <div>
            <Header text='Form'/>
            <Link to='/'>go to home</Link>
        </div>
    )
};
export default Form
