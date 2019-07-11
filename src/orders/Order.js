import React from "react";
import { connect } from "react-redux";
import { deleteOrder, nextStepOfTheOrder } from "../commons/Service";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { EXCLUDED, COMPLETED, COLOR_ORDERS } from "../commons/Constants";

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expandOrder: false
        }
    }

    _handleClick = (e) => {
        e.preventDefault();
        this.setState({
            expandOrder: !this.state.expandOrder
        });
    };

    _handleDelete = (e) => {
        e.preventDefault();
        this.props.onDelete(this.props.order.cpf);
    };

    _showOrder = (expandOrder, order) => {
        if (expandOrder) {
            return (
                <div>
                    <p>{order.description}</p>
                    {this._showLinkNext(order)}
                    {this._showLinkDelete(order)}
                </div>
            )
        }
    }

    _showLinkDelete(order) {
        if (order.status !== EXCLUDED) {
            return (<p><Link to='/' className='btn'
                onClick={() => this.props.deleteOrder(order)}>Excluir</Link></p>)
        }
    }

    _showLinkNext(order) {
        if (order.status !== COMPLETED) {
            return (<p><Link to='/' className='btn'
                onClick={() => this.props.nextStepOfTheOrder(order)}>Próximo</Link></p>)
        }
    }

    render() {
        let order = this.props.order;
        let textoBotao = "Exibir Pedido";
        let expandOrder = this.state.expandOrder;
        if (expandOrder) {
            textoBotao = "Ocultar Pedido";
        }
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card indigo darken-3">
                        <br />
                        <div className="card-content white-text">
                            <p>Cor: {COLOR_ORDERS[order.status]}</p>
                            <span className="card-title">{order.name}</span>
                            {this._showOrder(expandOrder, order)}
                        </div>
                        <div className="card-action">
                            <a className="right" href="#" onClick={this._handleClick}>{textoBotao}</a>
                            <br />
                        </div>
                    </div>
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteOrder, nextStepOfTheOrder }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);