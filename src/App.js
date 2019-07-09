import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from "./commons/Top";
import Menu from "./commons/Menu";
import { Switch, Route } from "react-router-dom";
import Messages from "./commons/Messages";
import OrderList from "./orders/OrderList";

function App() {
  return (
    <div className="App">
      <Top funcao='teste' />
      <Switch>
        <Route exact path='/' component={OrderList} />
        {/* <Route path='/devs' component={Devs} /> */}
        {/* <Route exact path='/dev' component={ManageDev} /> */}
        {/* <Route path='/dev/:id' component={ManageDev} /> */}
        {/* <Route path='/about' component={About} /> */}
      </Switch>
      <Menu />
      <Messages />
    </div>
  );
}

export default App;
