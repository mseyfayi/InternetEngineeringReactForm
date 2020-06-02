import {Method as axiosMethods} from "axios";

export type normalActionType = (...args: any) => object;
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
    errorCodes: errorCodesType[],
    pendingAction: thunkActionType,
    errorAction: thunkActionType,

    resolve(response?: object): () => void,

    reject(error?: any): () => void
}
