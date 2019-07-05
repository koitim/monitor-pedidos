import * as types from './actionTypes';
import Axios from "axios";
import { reset as resetForm, initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:3004/solicitations'
const

export function createSolicitation(solicitation) {
    solicitation.status = 0;
    return dispatch => {
        Axios.post(URL, solicitation)
            .then( request => {
                toastr.success('Operação realizada com sucesso!');
                dispatch(resetForm('solicitationForm'));
                dispatch({type: types.CREATE_SOLICITATION_SUCCESS});
            });
    };
}

export function loadSolicitations() {
    return dispatch => {
        Axios.get(URL)
            .then(solicitations => {
                dispatch(loadSolicitationsSucsess(solicitations.data));
            });
    };
}

export function loadSolicitationsSucsess(solicitations) {
    return { type: types.LOAD_SOLICITATIONS_SUCCESS, solicitations }
}

export function manageSolicitation(redirect) {
    return {type: types.MANAGE_DEV, redirect}
}

export function loadSolicitation(solicitation) {
    return dispatch => {
        dispatch(manageSolicitation(false))
        dispatch(initialize('solicitationForm', solicitation))
    }
}