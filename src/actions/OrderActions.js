import * as types from './ActionTypes';
import Axios from "axios";
import { reset as resetForm, initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:3004/orders'

export function createOrder(order) {
    order.status = 0;
    return dispatch => {
        Axios.post(URL, order)
            .then( request => {
                toastr.success('Operação realizada com sucesso!');
                dispatch(resetForm('orderForm'));
                dispatch({type: types.CREATE_ORDER_SUCCESS});
            });
    };
}

export function loadOrders() {
    return dispatch => {
        Axios.get(URL)
            .then(orders => {
                dispatch(loadOrdersSucsess(orders.data));
            });
    };
}

export function loadOrdersSucsess(orders) {
    return { type: types.LOAD_ORDERS_SUCCESS, solicitations: orders }
}

export function manageOrder(redirect) {
    return {type: types.MANAGE_ORDER, redirect}
}

export function loadOrder(order) {
    return dispatch => {
        dispatch(manageOrder(false))
        dispatch(initialize('orderForm', order))
    }
}