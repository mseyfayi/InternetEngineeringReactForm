import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk';
import {formsListReducer} from "./components/home/homeReducer";
import {formDetailReducer} from "./components/form/formReducer";
import {logger} from "redux-logger/src";

const reducer = combineReducers({
    formsList: formsListReducer,
    formDetail: formDetailReducer,
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
