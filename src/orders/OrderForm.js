import React from 'react';
import { reduxForm, Field } from 'redux-form';

const OrderForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' component='input' placeholder='Nome' />
            <Field name='cpf' component='input' placeholder='CPF' />
            <Field name='description' component='input' placeholder='Descrição do peddo' />
            <br />
            <br />
            <button className="btn waves-effect waves-light blue" type="submit" name="action">Registrar
            </button>
            <br />
            <br />
        </form>
    )
}

export default reduxForm({ form: 'orderForm' })(OrderForm)