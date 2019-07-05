import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";


const solicitationTools = window.__REDUX_DEVTOOLS_EXTENSION__
                       && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            solicitationTools
        )
    );
}