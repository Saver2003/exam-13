import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {PageHeader} from 'react-bootstrap';

import {createPlace} from "../../store/actions/places";

class NewPlace extends Component {
  createPlace = placeData => {
    this.props.onPlaceCreated(placeData).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Fragment>
        <PageHeader>New place</PageHeader>
        <PlaceForm onSubmit={this.createPlace}/>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlaceCreated: placeData => {
      return dispatch(createPlace(placeData))
    }
  }
};

export default connect(null, mapDispatchToProps)(NewPlace);