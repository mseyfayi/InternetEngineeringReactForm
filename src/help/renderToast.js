import {toastr} from 'react-redux-toastr'

const toastrOptions = {
    showCloseButton: false,
    closeOnToastrClick: true
};

export const toastTypes = ['light', 'message', 'info', 'success', 'warning', 'error'];

const renderToast = (title, message, type) => toastr[type](title, message, toastrOptions);
export default renderToast
