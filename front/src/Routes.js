import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewPlace from "./containers/NewPlace/NewPlace";
import Places from "./containers/Places/Places";
import Place from "./containers/Place/Place";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to='/login' />
);

const Routes = ({user}) => (
  <Switch>
    <Route path="/" exact component={Places}/>
    <ProtectedRoute
      isAllowed={user && user.role === 'admin'}
      path="/places/new"
      exact
      component={NewPlace}
    />
    <Route path="/place" exact component={Place}/>
    <Route path="/register" exact component={Register}/>
    <Route path="/login" exact component={Login}/>
  </Switch>
);

const mapStateToProps = state => ({
  user: state.users.user
});

export default withRouter(connect(mapStateToProps)(Routes));