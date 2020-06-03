import {formType, reduxActionType} from "../../global/types";
import FormActionTypes from "./formActionTypes";

interface FormsListStateType extends formType {
    isLoading: boolean;
}

const formsListInitialState: FormsListStateType = {
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
