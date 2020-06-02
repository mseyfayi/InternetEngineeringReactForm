import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk';
import homeReducer from "./components/home/homeReducer";
import {logger} from "redux-logger/src";

const reducer = combineReducers({
    home: homeReducer,
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
