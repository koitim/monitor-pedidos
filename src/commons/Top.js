import React from 'react';
import { connect } from 'react-redux';

class Top extends React.Component {

    render() {
        return (
            <div>
                {this.props.title}
                <br /><br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.orders.currentScreen
    };
}

export default connect(mapStateToProps)(Top)