import Axios from "axios";
import renderToast from "./renderToast";

const request = ({
                     method = 'post',
                     data = {},
                     params = {},
                     onUploadProgress,
                     url,
                     timeout = 7 * 1000,
                     headers,
                     successToastMessage,
                     failToastMessage = 'لطفا اتصال خود را بررسی کنید',
                     errorCodes = [],
                     resolve = () => {
                     },
                     reject,
                     pendingAction = () => () => {
                     },
                     errorAction = () => () => {
                     },
                     onFinal = () => {
                     },
                     canToastEconnabortedError = true
                 }
    ) => dispatch => {
    if (pendingAction)
        dispatch(pendingAction());

    Axios({url, method, headers, data, timeout, params, onUploadProgress})
        .then(response => {
            resolve(response);
            if (successToastMessage)
                dispatch(renderToast(successToastMessage, 'success'));
        })
            .catch(error => {
                const isCancelError = !error.config;
                const isCrosError = !error.response;
                const isEconnabortedError = error.code === "ECONNABORTED";

                if (isEconnabortedError) {
                    if (canToastEconnabortedError)
                        dispatch(renderToast('در حال حاضر سرور قادر به پاسخگویی نیست'));

                    if (errorAction)
                        dispatch(errorAction())

                } else if (!isCancelError) {
                    let errorCodeActioned = false;

                    if (!isCrosError) {
                        const code = error.response.status;

                        errorCodes.forEach(errorCode => {
                            if (code === errorCode.code && !errorCodeActioned) {
                                if (errorCode.toastMessage) {
                                    dispatch(renderToast(errorCode.toastMessage, errorCode.toastType));
                                }
                                if (errorCode.action) {
                                    errorCode.action(error);
                                }
                                errorCodeActioned = true;
                            }
                        });
                    }

                    if (!errorCodeActioned) {
                        if (!reject) {
                            dispatch(errorAction(failToastMessage));
                            dispatch(renderToast(failToastMessage));
                        } else {
                            reject(error);
                        }
                    }
                }
            })
        .finally(onFinal)
    }
;
export default request
