import React, {useEffect} from "react";
import {formType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import HomeFormsList from "./HomeFormsList";
import {getForms} from "./homeActions";
import {connect} from "react-redux";
import IsLoading from "../../global/components/IsLoading";
import {Container} from '@material-ui/core';

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
        <div className='flex-1 justify-content-center bg-light'>
            <Container maxWidth='md' className='mt-5'>
                <IsLoading isLoading={formsIsLoading}>
                    <HomeFormsList data={formsData}/>
                </IsLoading>
            </Container>
        </div>
    );
};

const mapStateToProps: mapStateType = (state) => ({
    formsData: state.formsList.data,
    formsIsLoading: state.formsList.isLoading,
});
const mapDispatchToProps: mapDispatchType = {getForms};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
