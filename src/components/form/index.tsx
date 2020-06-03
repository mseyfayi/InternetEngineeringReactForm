import React from "react";
import Header from "../../global/components/Header";
import FormContainer from "./FormContainer";
import {useParams} from "react-router";

const Form = () => {
    const {id} = useParams();

    return <>
        <Header text={`Form ${id}`}/>
        <FormContainer/>
    </>;
};
export default Form
