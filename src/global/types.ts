import {Method as axiosMethods} from "axios";
import HomeActionTypes from "../components/home/homeActionTypes";
import FormActionTypes from "../components/form/formActionTypes";

export type mapStateType = (state: any) => object
export type mapDispatchType = object

export interface reduxActionType {
    type: HomeActionTypes | FormActionTypes,
    payload?: any,
    meta?: any
}

export type normalActionType = (...args: any) => reduxActionType;
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
    errorCodes?: Array<errorCodesType>,
    successAction: thunkActionType,
    errorAction: thunkActionType,
    pendingAction: thunkActionType,

    resolve(response?: object): () => void,

    reject(error?: any): () => void
}

export interface optionType {
    label: string;
    value: any;
}

export enum fieldTypesEnum {
    Text = 'Text',
    Number = 'Number',
    Location = 'Location',
    Date = 'Date',
}

export interface fieldType {
    name: string;
    title: string;
    type: fieldTypesEnum;
    required?: boolean;
    options?: Array<optionType>;
}

export interface formType {
    title: string;
    id: number;
    fields: Array<fieldType>
}
