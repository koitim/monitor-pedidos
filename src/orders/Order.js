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

    _showLinkDelete(expandOrder, order) {
        if (order.status !== EXCLUDED && expandOrder) {
            return (<Link to='/' className='btn red'
                onClick={() => this.props.deleteOrder(order)}><i className="material-icons">delete</i></Link>)
        }
    }

    _showLinkNext(expandOrder, order) {
        if (order.status !== COMPLETED && expandOrder) {
            return (<Link to='/' className='btn blue'
                onClick={() => this.props.nextStepOfTheOrder(order)}><i className="material-icons">forward</i></Link>)
        }
    }

    render() {
        let order = this.props.order;
        let expandOrder = this.state.expandOrder;
        let description = "";
        if (expandOrder) {
            description = order.description;
        }
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <a className="white-text" href="#" onClick={this._handleClick}>
                                <span className={"card-title " + COLOR_ORDERS[order.status]}>
                                    {order.name}
                                </span>
                            </a>
                            <p>{description}</p>
                            {this._showLinkNext(expandOrder, order)}
                            {this._showLinkDelete(expandOrder, order)}
                        </div>
                    </div>
                </div>
            </div>
        )
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