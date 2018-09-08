import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchOnePlace} from "../../store/actions/places";

class Place extends Component {

  componentDidMount(data) {
    this.props.onFetchOnePlace(data);
  }



  render() {
    console.log(this.props.places.title);
    return (
      <div>
        <h3>something</h3>
        <h3>{this.props.places.title}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOnePlace: data => dispatch(fetchOnePlace(data))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);