import {formType, normalActionType, thunkActionType} from "../../global/types";
import api from "../../global/api";
import {request} from "../../global/actions/index";
import FormActionTypes from "./formActionTypes";

export const getFormDetail: thunkActionType = (id: number) => dispatch => {
    dispatch(request({
        method: 'get',
        url: `${api.forms}/${id}`,
        successAction: getFormDetailSuccess,
        errorAction: getFormDetailError,
        pendingAction: getFormDetailPending
    }))
};

const getFormDetailSuccess: normalActionType = (data: formType) => ({
    type: FormActionTypes.GET_FORM_DETAIL_SUCCESS,
    payload: data
});
const getFormDetailPending: normalActionType = () => ({
    type: FormActionTypes.GET_FORM_DETAIL_PENDING,
});
const getFormDetailError: normalActionType = () => ({
    type: FormActionTypes.GET_FORM_DETAIL_ERROR,
});
