import React from "react";
import Header from "../../global/components/Header";
import renderToast from "../../global/actions/renderToast";

const Home = () => {
    const handleClick = () => renderToast('koft', 'warning', 'warning');
    return (
        <div>
            <Header text='Home' isHome/>
            <div className='d-flex align-items-center justify-content-center' onClick={handleClick}>
                Show toast
            </div>
        </div>
    )
};
export default Home
