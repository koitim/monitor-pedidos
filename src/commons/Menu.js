import React from 'react';
import { Link } from "react-router-dom";
import { newOrder } from "../commons/Service";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Menu extends React.Component {

    render() {
        const { newOrder, iconOrders, iconSumary, iconNew } = this.props;
        return (
            <ul className="tabs tabs-fixed-width blue">
                <li className="tab">
                    <Link to='/' className={iconOrders}><i className="material-icons">assignment</i></Link>
                </li>
                <li className="tab">
                    <Link to='/sumary' className={iconSumary}><i className="material-icons">assessment</i></Link>
                </li>
                <li className="tab">
                    <Link to='/order' className={iconNew} onClick={() => newOrder()}><i className="material-icons">add</i></Link>
                </li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        iconOrders: "btn-flat " + state.orders.iconOrders,
        iconSumary: "btn-flat " + state.orders.iconSumary,
        iconNew: "btn-flat " + state.orders.iconNew
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newOrder }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)