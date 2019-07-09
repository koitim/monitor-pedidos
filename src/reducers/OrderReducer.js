import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
    list: [],
    redirect: false
}

export default function OrderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_ORDER_SUCCESS:
            return { ...state, redirect: true };
        case types.LOAD_ORDERS_SUCCESS:
            return { ...state, list: action.orders };
        case types.MANAGE_ORDER:
            return { ...state, redirect: action.redirect };
        default:
            return state;
    }
}