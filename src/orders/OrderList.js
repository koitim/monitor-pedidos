import React from 'react';
import Order from './Order';
//import EstoriaForm from './EstoriaForm';
import axios from 'axios';

const API_URL = 'http://localhost:3004/orders/'

export default class OrderList extends React.Component {

    constructor() {
        super();
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        this._fetchOrders();
    }

    _addOrder = (order) => {
        axios.post(API_URL, order)
            .then(response => this._fetchOrders());
    }

    _deleteOrder = (cpf) => {
        axios.delete(API_URL + cpf)
            .then(response => this._fetchOrders());
    }

    render() {
        let orders = this._getOrders();
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    {orders}
                    {/* <EstoriaForm 
                    adicionarEstoria={this._addOrder}/> */}
                </div>
            </div>);
    }

    _getOrders() {
        return this.state.orders.map(order =>
            <Order
                key={order.id}
                order={order}
                onDelete={this._deleteOrder}
            />);
    }

    _fetchOrders() {
        axios.get(API_URL)
            .then(response => { this.setState({ orders: response.data }) });
    }


}