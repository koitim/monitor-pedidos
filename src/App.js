import React from 'react';
import './App.css';
import Top from "./commons/Top";
import Menu from "./commons/Menu";
import { Switch, Route } from "react-router-dom";
import Messages from "./commons/Messages";
import OrderList from "./orders/OrderList";
import ManageOrder from "./orders/ManageOrder";
import SumaryOrders from "./orders/SumaryOrders";
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Switch>
          <Route exact path='/' component={OrderList} />
          <Route exact path='/order' component={ManageOrder} />
          <Route path='/sumary' component={SumaryOrders} />
        </Switch>
        <Menu />
        <Messages />
      </div>
    );
  }
}

export default App;
