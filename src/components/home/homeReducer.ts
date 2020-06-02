import HomeActionTypes from "./homeActionTypes";
import {reduxActionType} from "../../global/types";

interface homeStateType {
    isLoading: boolean;
    data: object[];
}

const initialState: homeStateType = {
    isLoading: false,
    data: []
};

const homeReducer = (state = initialState, action: reduxActionType) => {
    switch (action.type) {
        case HomeActionTypes.GET_FORMS_PENDING:
            return {...state, isLoading: true};
        case HomeActionTypes.GET_FORMS_ERROR:
            return {...state, isLoading: false};
        case HomeActionTypes.GET_FORMS_SUCCESS:
            return {data: action.payload, isLoading: false};
        default:
            return state;
    }
};
export default homeReducer
