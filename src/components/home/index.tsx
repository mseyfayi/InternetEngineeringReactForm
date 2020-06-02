import React, {useEffect} from "react";
import Header from "../../global/components/Header";
import {mapDispatchToPropsType, mapStateToPropsType, thunkActionType} from '../../global/types'
import {getForms} from './homeActions'
import {connect} from "react-redux";

type HomeProps = {
    getForms: thunkActionType;
}
const Home = ({getForms}: HomeProps) => {
    useEffect(() => {
        getForms();
    }, [getForms]);
    return (
        <>
            <Header text='Home' isHome/>
        </>
    )
};

const mapStateToProps: mapStateToPropsType = (state: object) => ({});
const mapDispatchToProps: mapDispatchToPropsType = ({
    getForms
});
export default connect(mapStateToProps,mapDispatchToProps)(Home)

