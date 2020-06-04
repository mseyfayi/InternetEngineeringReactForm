import React, {useEffect} from "react";
import {fieldType, mapDispatchType, mapStateType, thunkActionType} from "../../global/types";
import {getFormDetail, submitForm} from "./formActions";
import {connect} from "react-redux";
import {IsLoading, MyContainer} from "../../global/components";
import {useParams} from "react-router";
import {Container, Typography} from "@material-ui/core";
import FormDetail, {valuesType} from "./FormDetail";

interface PropsType {
    formDetailIsLoading: boolean;
    formTitle: string;
    formId: number;
    formFields: Array<fieldType>;
    getFormDetail: thunkActionType;
    submitForm: thunkActionType;
    submitFormIsLoading: boolean;
}

const FormContainer = ({formDetailIsLoading, submitFormIsLoading, formTitle, formId, formFields, getFormDetail, submitForm}: (PropsType & any)) => {
    const {id} = useParams();

    useEffect(() => {
        getFormDetail(id);
    }, [getFormDetail, id]);

    const handleSubmit = (data: valuesType, callback: () => void) => submitForm(id, data, callback);

    return (
        <MyContainer>
            <IsLoading isLoading={formDetailIsLoading || submitFormIsLoading}>
                <Container maxWidth='xs' className='d-flex flex-column align-items-stretch ml-0'>

                    <Typography variant='h5'>
                        {`${formTitle} "${formId}"`}
                    </Typography>
                    <FormDetail fields={formFields} submitForm={handleSubmit}/>
                </Container>
            </IsLoading>
        </MyContainer>
    );
};

const mapStateToProps: mapStateType = (state) => ({
    formDetailIsLoading: state.formDetail.isLoading,
    submitFormIsLoading: state.submitForm.isLoading,
    formTitle: state.formDetail.title,
    formId: state.formDetail.id,
    formFields: state.formDetail.fields
});
const mapDispatchToProps: mapDispatchType = {getFormDetail, submitForm};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
