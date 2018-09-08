import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, PageHeader} from "react-bootstrap";
import {fetchPlaces} from "../../store/actions/places";
import PlaceListItem from "../../components/PlaceListItem/PlaceListItem";

class Places extends Component {
  componentDidMount() {
    this.props.onFetchPlaces();
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          Places
          {this.props.user && this.props.user.role === 'admin' &&
          <Link to="/places/new">
            <Button bsStyle="primary" className="pull-right">
              Add place
            </Button>
          </Link>
          }
        </PageHeader>

        {this.props.places.map(place => (
          <PlaceListItem
            key={place._id}
            id={place._id}
            title={place.title}
            image={place.image}
          />
        ))}
      </Fragment>
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
    onFetchPlaces: () => dispatch(fetchPlaces())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);