import * as types from '../actions/ActionTypes';
import { EXCLUDED, TRACK } from "../commons/Constants";

const INITIAL_STATE = {
    currentScreen: TRACK,
    list: [],
    sumary: [],
    redirect: false,
    order: {},
    iconOrders: "",
    iconSumary: "",
    iconNew: ""
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
        case types.MANAGE_ORDER:
            return { ...state, redirect: action.redirect };
        case types.LOAD_SUMARY_ORDERS_SUCCESS:
            return { ...state, sumary: action.sumary };
        case types.CHANGE_TITLE:
            return { ...state, currentScreen: action.title }
        case types.ACTIVATE_ICON_ORDERS:
            return { ...state, iconOrders: 'active', iconSumary: '', iconNew: '' }
        case types.ACTIVATE_ICON_SUMARY:
            return { ...state, iconOrders: '', iconSumary: 'active', iconNew: '' }
        case types.ACTIVATE_ICON_NEW:
            return { ...state, iconOrders: '', iconSumary: '', iconNew: 'active' }
        default:
            return state;
    }
}