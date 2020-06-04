import React, {useEffect} from "react";
import {formType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import HomeFormsList from "./HomeFormsList";
import {getForms} from "./homeActions";
import {connect} from "react-redux";
import {IsLoading, MyContainer} from "../../global/components";
import {Typography} from "@material-ui/core";

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
            <div className='flex-1 flex-column align-items-center justify-content-center m-2'>
                <Typography variant='h4'>
                    List of forms
                </Typography>
                <br/>
                <Typography variant='subtitle1'>
                    Click on one of them to be redirected to the relevant form
                </Typography>
                <br/>
            </div>

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
