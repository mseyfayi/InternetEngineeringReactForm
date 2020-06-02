import React from "react";
import Header from "../../global/components/Header";
import {renderToast} from "../../global/actions";

const Home = () => {
    const handleClick = () => renderToast('koft', 'warning', 'warning');
    return (
        <>
            <Header text='Home' isHome/>
            <div className='d-flex flex-grow-1 align-items-center justify-content-center' onClick={handleClick}>
                Show toast
            </div>
        </>
    )
};
export default Home
