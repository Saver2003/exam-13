import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const Routes = () => (
  <Switch>
    <Route path="/register" exact component={Register}/>
    <Route path="/login" exact component={Login}/>
  </Switch>
);

const mapStateToProps = state => ({
  user: state.users.user
});

export default withRouter(connect(mapStateToProps)(Routes));