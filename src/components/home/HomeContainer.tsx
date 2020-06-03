import React, {useEffect} from "react";
import {formType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import HomeFormsList from "./HomeFormsList";
import {getForms} from "./homeActions";
import {connect} from "react-redux";

interface PropsType {
    getForms: thunkActionType;
    forms: Array<formType>;
}

const HomeContainer = ({getForms, forms}: (PropsType & any)) => {
    useEffect(() => {
        getForms();
    }, [getForms]);
    return (
        <div className='flex-1 justify-content-center bg-light'>
            <HomeFormsList data={forms}/>
        </div>
    );
};

const mapStateToProps: mapStateType = (state) => ({forms: state.home.data});
const mapDispatchToProps: mapDispatchType = {getForms};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
