import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
    list: [],
    redirect: false
}

export default function solicitationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_SOLICITATION_SUCCESS:
            return { ...state, redirect: true };
        case types.LOAD_SOLICITATIONS_SUCCESS:
            return { ...state, list: action.solicitations };
        case types.MANAGE_SOLICITATION:
            return { ...state, redirect: action.redirect };
        default:
            return state;
    }
}