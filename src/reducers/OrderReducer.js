import * as types from '../actions/ActionTypes';
import { EXCLUDED, TRACK } from "../commons/Constants";

const INITIAL_STATE = {
    currentScreen: TRACK,
    list: [],
    sumary: [],
    redirect: false,
    order: {}
}

export default function OrderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_ORDER_SUCCESS:
            return { ...state, redirect: true };
        case types.LOAD_ORDERS_SUCCESS:
            let activeOrders = [];
            if (action.orders.length > 0) {
                action.orders.forEach(order => {
                    if (order.status !== EXCLUDED) {
                        activeOrders.push(order);
                    }
                });
            }
            return { ...state, list: activeOrders };
        case types.DELETE_ORDER_SUCCESS:
            return { ...state };
        case types.NEXT_STEP_ORDER_SUCCESS:
            return { ...state };
        case types.MANAGE_ORDER:
            return { ...state, redirect: action.redirect };
        case types.LOAD_SUMARY_ORDERS_SUCCESS:
            return { ...state, sumary: action.sumary };
        case types.CHANGE_TITLE:
            return { ...state, currentScreen: action.title }
        default:
            return state;
    }
}