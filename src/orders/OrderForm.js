import React from 'react';
import {reduxForm, Field} from 'redux-form';

const OrderForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' component='input' placeholder='Nome'/>
            <Field name='cpf' component='input' placeholder='CPF'/>
            <Field name='description' component='input' placeholder='Descrição do peddo'/>
            <input type="submit"/>
        </form>
    )
}

export default reduxForm({form: 'orderForm'})(OrderForm)