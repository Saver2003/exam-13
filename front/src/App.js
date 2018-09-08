import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;