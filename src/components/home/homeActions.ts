import {normalActionType, thunkActionType} from "../../global/types";
import api from "../../global/api";
import {request} from "../../global/actions/index";
import HomeActionTypes from "./homeActionTypes";

export const getForms: thunkActionType = () => dispatch => {
    dispatch(request({
        method: 'get',
        url: api.forms,
        successAction: getFormsSuccess,
        errorAction: getFormsError,
        pendingAction: getFormsPending
    }))
};

const getFormsSuccess: normalActionType = (data: object) => ({
    type: HomeActionTypes.GET_FORMS_SUCCESS,
    payload: data
});
const getFormsPending: normalActionType = () => ({
    type: HomeActionTypes.GET_FORMS_PENDING,
});
const getFormsError: normalActionType = () => ({
    type: HomeActionTypes.GET_FORMS_ERROR,
});
