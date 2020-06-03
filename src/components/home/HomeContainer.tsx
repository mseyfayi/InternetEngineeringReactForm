import React, {useEffect} from "react";
import {formType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import HomeFormsList from "./HomeFormsList";
import {getForms} from "./homeActions";
import {connect} from "react-redux";
import IsLoading from "../../global/components/IsLoading";

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
        <div className='p-5 flex-1 justify-content-center bg-light'>
            <IsLoading isLoading={formsIsLoading}>
                    <HomeFormsList data={formsData}/>
            </IsLoading>
        </div>
    );
};

const mapStateToProps: mapStateType = (state) => ({
    formsData: state.formsList.data,
    formsIsLoading: state.formsList.isLoading,
});
const mapDispatchToProps: mapDispatchType = {getForms};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
