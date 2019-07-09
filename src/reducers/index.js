import { combineReducers } from "redux";
import orders from './OrderReducer';
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
    orders, form: formReducer,
    toastr: toastrReducer
});

export default  rootReducer;