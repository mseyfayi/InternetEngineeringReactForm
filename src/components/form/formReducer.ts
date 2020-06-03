import {formType, reduxActionType} from "../../global/types";
import FormActionTypes from "./formActionTypes";

interface isLoadingType {
    isLoading: boolean;
}

const formsListInitialState: formType & isLoadingType = {
    isLoading: false,
    title: '',
    id: 0,
    fields: []
};

export const formDetailReducer = (state = formsListInitialState, action: reduxActionType) => {
    switch (action.type) {
        case FormActionTypes.GET_FORM_DETAIL_PENDING:
            return {...state, isLoading: true};
        case FormActionTypes.GET_FORM_DETAIL_ERROR:
            return {...state, isLoading: false};
        case FormActionTypes.GET_FORM_DETAIL_SUCCESS:
            return {...action.payload, isLoading: false};
        default:
            return state;
    }
};

const submitFormsInitialState: isLoadingType = {
    isLoading: false
};

export const submitFormReducer = (state = submitFormsInitialState, action: reduxActionType) => {
    switch (action.type) {
        case FormActionTypes.SUBMIT_FORM_PENDING:
            return {isLoading: true};
        case FormActionTypes.SUBMIT_FORM_ERROR:
            return {isLoading: false};
        case FormActionTypes.SUBMIT_FORM_SUCCESS:
            return {isLoading: false};
        default:
            return state;
    }
};
