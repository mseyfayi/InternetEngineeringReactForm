import React from "react";
import Header from "../../common/Header";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header text='Home' isHome/>
            <Link to='/form'>go to form</Link>
        </div>
    )
};
export default Home
