import {combineReducers, createStore} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'

const reducer = combineReducers({
    toastr: toastrReducer
});

const store = createStore(reducer);

export default store
