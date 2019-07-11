import React from 'react';
import { Link } from "react-router-dom";
import { newOrder } from "../commons/Service";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Menu extends React.Component {

    render() {
        return (
            <nav className="indigo darken-4" role="navigation">
                <div className="nav-wrapper container">
                    <br /><br />
                    <p><Link to='/' className='btn'>Acompanhar</Link></p>
                    <p><Link to='/sumary' className='btn'>Resumo</Link></p>
                    <p><Link to='/order' className='btn'
                        onClick={() => this.props.newOrder()}>Novo</Link></p>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newOrder }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)