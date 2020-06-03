import React from "react";
import Header from "../../global/components/Header";
import {mapDispatchType, mapStateType} from '../../global/types'
import {getForms} from './homeActions'
import {connect} from "react-redux";
import HomeContainer from "./HomeContainer";

const Home = () =>
    <>
        <Header text='Home' isHome/>
        <HomeContainer />
    </>;

const mapStateToProps: mapStateType = (state) => ({forms: state.home.data});
const mapDispatchToProps: mapDispatchType = ({
    getForms
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)

