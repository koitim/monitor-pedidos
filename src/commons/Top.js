import React from 'react';
import { connect } from 'react-redux';

class Top extends React.Component {

    render() {
        return (
            <header className="indigo white-text">
                <h5>{this.props.title}</h5>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.orders.currentScreen
    };
}

export default connect(mapStateToProps)(Top)