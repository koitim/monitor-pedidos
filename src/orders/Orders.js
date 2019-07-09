import React from 'react';
import { connect } from 'react-redux';
import {loadOrders, manageOrder} from '../actions/OrderActions';
import { bindActionCreators } from 'redux';
//import DevList from './DevList';
import {Link} from 'react-router-dom';


class Orders extends React.Component {

    componentDidMount() {
        this.props.loadOrders();
    }

    orderRow = (order, index) => {
        return <div key={index}>{order.name}</div>;
    };

    render() {
        return (
            <div className="container">
                <OrderList orders={this.props.orders} />
                <br/><br/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadOrders, manageOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);