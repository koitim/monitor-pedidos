import React from 'react';
import Order from './Order';
import { loadOrders } from "../commons/Service";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class OrderList extends React.Component {

    componentDidMount() {
        this.props.loadOrders();
    }

    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                {this._getOrders()}
            </div>);
    }

    _getOrders() {
        return this.props.orders.map(order =>
            <Order
                key={order.id}
                order={order}
            />);
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadOrders }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);