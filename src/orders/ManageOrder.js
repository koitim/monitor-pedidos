import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createOrder} from '../commons/Service'
import OrderForm from './OrderForm';
import {Redirect} from 'react-router-dom';


class ManageOrder extends Component {

    render() {
        if (this.props.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <div className="container">
                <OrderForm onSubmit={this.props.createOrder}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {redirect: state.orders.redirect}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({createOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);