import Axios from "axios";
import { reset as resetForm, initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { EXCLUDED, NEW, NEW_ORDER, ALL, TRACK } from "../commons/Constants";
import * as actions from "../actions/OrderActions";

const URL = 'http://localhost:3004/orders'

export function createOrder(order) {
    order.status = NEW;
    order.id = generateId(order);
    return dispatch => {
        Axios.post(URL, order)
            .then(request => {
                toastr.success('Inclusão realizada com sucesso!');
                dispatch(resetForm('orderForm'));
                dispatch(actions.createOrderSuccess());
            });
    };
}

function generateId(order) {
    return order.cpf + '-' + order.name
}

export function deleteOrder(order) {
    order.status = EXCLUDED;
    let method = 'put'
    let id = order.id
    return dispatch => {
        Axios[method](`${URL}/${id}`, order)
            .then(request => {
                toastr.success('Exclusão realizada com sucesso')
                dispatch(actions.deleteOrderSuccess(request.data))
            })
    }
}

export function nextStepOfTheOrder(order) {
    order.status++
    let method = 'put'
    let id = order.id
    return dispatch => {
        Axios[method](`${URL}/${id}`, order)
            .then(request => {
                toastr.success('Operação realizada com sucesso')
                dispatch(actions.nextStepOrderSuccess(request.data))
            })
    }
}

export function loadOrders() {
    return dispatch => {
        Axios.get(URL)
            .then(orders => {
                dispatch(actions.changeTitle(TRACK))
                dispatch(actions.activateIconOrders())
                dispatch(actions.loadOrdersSuccess(orders.data));
            });
    };
}

export function newOrder() {
    return dispatch => {
        dispatch(actions.changeTitle(NEW_ORDER))
        dispatch(actions.activateIconNew())
        dispatch(actions.manageOrder(false));
    };
}

export function loadSumaryOrders() {
    return dispatch => {
        Axios.get(URL)
            .then(orders => {
                let sumaryOrders = [0, 0, 0, 0, 0];
                if (orders.data.length > 0) {
                    orders.data.forEach(order => {
                        sumaryOrders[order.status]++
                    });
                }
                dispatch(actions.changeTitle(ALL))
                dispatch(actions.activateIconSumary())
                dispatch(actions.loadSumaryOrdersSuccess(sumaryOrders));
            });
    };
}

export function loadOrder(order) {
    return dispatch => {
        dispatch(actions.manageOrder(false))
        dispatch(initialize('orderForm', order))
    }
}