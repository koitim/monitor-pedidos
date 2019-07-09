import React from "react";

export default class Order extends React.Component {

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

    render() {
        let order = this.props.order;
        let description;
        let textoBotao = "Exibir Pedido";
        if (this.state.expandOrder) {
            description = order.description;
            textoBotao = "Ocultar Pedido";
        }
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card indigo darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">{order.name}</span>
                            <p>{description}</p>
                        </div>
                        <div className="card-action">
                            <a className="right" href="#" onClick={this._handleClick}>{textoBotao}</a>
                            {/* <a className="right" href="#" onClick={this._handleDelete}>Excluir</a> */}
                            <br />
                        </div>
                    </div>
                </div>
            </div>);
    }

}