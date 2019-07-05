import { combineReducers } from "redux";
import solicitations from './solicitationReducer';
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
    solicitations, form: formReducer,
    toastr: toastrReducer
});

export default  rootReducer;