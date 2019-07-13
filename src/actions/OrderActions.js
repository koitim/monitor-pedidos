import * as types from './ActionTypes';

export function createOrderSuccess() {
    return { type: types.CREATE_ORDER_SUCCESS }
}

export function loadOrdersSuccess(orders) {
    return { type: types.LOAD_ORDERS_SUCCESS, orders }
}

export function loadSumaryOrdersSuccess(sumaryOrders) {
    return { type: types.LOAD_SUMARY_ORDERS_SUCCESS, sumary: sumaryOrders }
}

export function manageOrder(redirect) {
    return { type: types.MANAGE_ORDER, redirect }
}

export function changeTitle(title) {
    return { type: types.CHANGE_TITLE, title }
}

export function activateIconOrders() {
    return { type: types.ACTIVATE_ICON_ORDERS }
}

export function activateIconSumary() {
    return { type: types.ACTIVATE_ICON_SUMARY }
}

export function activateIconNew() {
    return { type: types.ACTIVATE_ICON_NEW }
}