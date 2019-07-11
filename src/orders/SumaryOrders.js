import React from 'react';
import { loadSumaryOrders } from "../commons/Service";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NEW, PREPARING, READY_FOR_PAYMENT, COMPLETED } from "../commons/Constants";

class SumaryOrders extends React.Component {

    componentDidMount() {
        this.props.loadSumaryOrders();
    }

    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <p>Novo - {this.props.sumary[NEW]}</p>
                <p>Em preparação - {this.props.sumary[PREPARING]}</p>
                <p>Prontos para pagamento - {this.props.sumary[READY_FOR_PAYMENT]}</p>
                <p>Concluídos - {this.props.sumary[COMPLETED]}</p>
            </div>);
    }

}

function mapStateToProps(state) {
    return {
        sumary: state.orders.sumary
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadSumaryOrders }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SumaryOrders);