import {Method as axiosMethods} from "axios";
import HomeActionTypes from "../components/home/homeActionTypes";

export type mapStateToPropsType = (state: object) => object
export type mapDispatchToPropsType = object;
export type normalActionType = (...args: any) => { type: HomeActionTypes, payload?: any };
export type thunkActionType = (...args: any) => (dispatch: any, getState: any) => void;

export interface errorCodesType {
    code: number,
    toastMessage?: string,

    action?(error?: any): void
}

export interface requestOptionType {
    method: axiosMethods,
    data?: object,
    params?: object,
    url: string,
    timeout?: number,
    headers?: object,
    toastTitle?: string,
    successToastMessage?: string,
    failToastMessage?: string,
    errorCodes?: errorCodesType[],
    successAction: thunkActionType,
    errorAction: thunkActionType,
    pendingAction: thunkActionType,

    resolve(response?: object): () => void,

    reject(error?: any): () => void
}
