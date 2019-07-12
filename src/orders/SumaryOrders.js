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
        const totalNew = this.props.sumary[NEW]
        const totalPreparing = this.props.sumary[PREPARING]
        const totalReady = this.props.sumary[READY_FOR_PAYMENT]
        const totalCompleted = this.props.sumary[COMPLETED]
        return (
            <div className="collection">
                <p className="collection-item"><span className="badge">{totalNew}</span>Novo</p>
                <p className="collection-item"><span className="badge">{totalPreparing}</span>Em preparação</p>
                <p className="collection-item"><span className="badge">{totalReady}</span>Prontos para pagamento</p>
                <p className="collection-item"><span className="badge">{totalCompleted}</span>Concluídos</p>
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