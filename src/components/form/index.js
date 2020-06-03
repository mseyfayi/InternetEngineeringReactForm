import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Header from "../../global/components/Header";
import {useParams} from 'react-router-dom';

const Form = () => {
    const {id} = useParams();

    useEffect(() => {
        //todo get form
    }, [id]);
    return (
        <div>
            <Header text='Form'/>
            <Link to='/'>go to home</Link>
        </div>
    )
};
export default Form
