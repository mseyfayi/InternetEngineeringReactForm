import React, {useEffect} from "react";
import Header from "../../global/components/Header";
import {mapDispatchToPropsType, mapStateToPropsType, thunkActionType} from '../../global/types'
import {getForms} from './homeActions'
import {connect} from "react-redux";

type HomeProps = {
    getForms: thunkActionType;
    forms: object[];
}
const Home = ({getForms, forms}: HomeProps) => {
    useEffect(() => {
        getForms();
    }, [getForms]);
    return (
        <>
            <Header text='Home' isHome/>
        </>
    )
};

const mapStateToProps: mapStateToPropsType = (state) => ({forms: state.home.data});
const mapDispatchToProps: mapDispatchToPropsType = ({
    getForms
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)

