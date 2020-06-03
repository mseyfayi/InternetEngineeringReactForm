import React, {useEffect} from "react";
import {fieldType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import {getFormDetail} from "./formActions";
import {connect} from "react-redux";
import {IsLoading, MyContainer} from "../../global/components";
import {useParams} from "react-router";
import {Typography} from "@material-ui/core";
import FormDetail from "./FormDetail";

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
        <MyContainer>
            <IsLoading isLoading={formDetailIsLoading}>
                <Typography variant='h5'>
                    {`${formTitle} "${formId}"`}
                </Typography>
                <FormDetail fields={formFields}/>
            </IsLoading>
        </MyContainer>
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
