import React, {useEffect} from "react";
import {formType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import HomeFormsList from "./HomeFormsList";
import {getForms} from "./homeActions";
import {connect} from "react-redux";
import {IsLoading, MyContainer} from "../../global/components";

interface PropsType {
    getForms: thunkActionType;
    formsData: Array<formType>;
    formsIsLoading: boolean;
}

const HomeContainer = ({getForms, formsData, formsIsLoading}: (PropsType & any)) => {
    useEffect(() => {
        getForms();
    }, [getForms]);

    return (
        <MyContainer>
            <IsLoading isLoading={formsIsLoading}>
                <HomeFormsList data={formsData}/>
            </IsLoading>
        </MyContainer>
    );
};

const mapStateToProps: mapStateType = (state) => ({
    formsData: state.formsList.data,
    formsIsLoading: state.formsList.isLoading,
});
const mapDispatchToProps: mapDispatchType = {getForms};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
