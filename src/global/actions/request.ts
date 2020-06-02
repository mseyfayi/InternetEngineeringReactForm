import Axios from "axios";
import renderToast, {toastTypes} from "./renderToast";
import {requestOptionType} from "../types";

const request = (requestOption: requestOptionType) =>
    async (dispatch: any) => {
        const {
            method,
            data = {},
            params = {},
            url,
            timeout = 7 * 1000,
            headers,
            toastTitle = '',
            successToastMessage,
            failToastMessage = 'لطفا اتصال خود را بررسی کنید',
            errorCodes = [],
            resolve,
            reject,
            pendingAction,
            errorAction,
        } = requestOption;

        // Start loading
        if (pendingAction)
            dispatch(pendingAction());

        try {
            // Calls "url" by "method" with "data" as body and "headers" and params
            const response = await Axios.create({url, method, headers, data, timeout, params});

            // If axios call was successful
            if (resolve)
                resolve(response);
            if (successToastMessage)
                dispatch(renderToast(toastTitle, successToastMessage, toastTypes.SUCCESS));

        } catch (error) {
            // Component unmounted and axios unsubscribed
            const isCancelError = !error.config;
            // Cross-Origin error
            const isCorsError = !error.response;
            // Econnaborted because of connection lost or vpn
            const isEconnabortedError = error.code === "ECONNABORTED";

            if (isEconnabortedError) {
                if (errorAction)
                    dispatch(errorAction(failToastMessage))
            } else if (!isCancelError) {
                // Error codes are
                let errorCodeActioned = false;

                if (!isCorsError) {
                    const code = error.response.status;

                    errorCodes.forEach(errorCode => {
                        if (code === errorCode.code && !errorCodeActioned) {
                            if (errorCode.toastMessage)
                                dispatch(renderToast(toastTitle, errorCode.toastMessage, toastTypes.ERROR));
                            if (errorCode.action)
                                errorCode.action(error);
                            errorCodeActioned = true;
                        }
                    });
                }

                if (!errorCodeActioned) {
                    if (!reject) {
                        if (errorAction)
                            dispatch(errorAction(failToastMessage));
                        dispatch(renderToast(toastTitle, failToastMessage, toastTypes.ERROR));
                    } else {
                        reject(error);
                    }
                }
            }
        }
    }
;
export default request
