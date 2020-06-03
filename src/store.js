import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk';
import {formsListReducer} from "./components/home/homeReducer";
import {formDetailReducer, submitFormReducer} from "./components/form/formReducer";
import {logger} from "redux-logger/src";

const reducer = combineReducers({
    formsList: formsListReducer,
    formDetail: formDetailReducer,
    submitForm: submitFormReducer,
    toastr: toastrReducer
});

const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        logger
    )
);

export default store
