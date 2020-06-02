import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    toastr: toastrReducer
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store
