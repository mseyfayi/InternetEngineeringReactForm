import React, {useEffect} from "react";
import {fieldType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import {getFormDetail} from "./formActions";
import {connect} from "react-redux";
import IsLoading from "../../global/components/IsLoading";
import {useParams} from "react-router";

interface PropsType {
    formDetailIsLoading: boolean;
    formTitle: string;
    formId: number;
    formFields: Array<fieldType>;
    getFormDetail: thunkActionType
}

const FormContainer = ({formDetailIsLoading, formTitle, formId, formFields, getFormDetail}: (PropsType & any)) => {
    const {id} = useParams();

    useEffect(() => {
        getFormDetail(id);
    }, [getFormDetail, id]);

    return (
        <div className='p-5 flex-1 justify-content-center bg-light'>
            <IsLoading isLoading={formDetailIsLoading}>

            </IsLoading>
        </div>
    );
};

const mapStateToProps: mapStateType = (state) => ({
    formDetailIsLoading: state.formDetail.isLoading,
    formTitle: state.formDetail.title,
    formId: state.formDetail.id,
    formFields: state.formDetail.fields
});
const mapDispatchToProps: mapDispatchType = {getFormDetail};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
