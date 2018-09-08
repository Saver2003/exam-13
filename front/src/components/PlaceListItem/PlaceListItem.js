import React from 'react';
import {Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import config from '../../config';

import notFound from '../../assets/images/not-found.png';

const PlaceListItem = props => {
  let image = notFound;

  if (props.image) {
    image = config.apiUrl + '/uploads/' + props.image;
  }

  return (
    <Col xs={6} md={4}>
        <Image
          style={{height: '100px', margin: '0 10px 30px'}}
          src={image}
          thumbnail
        />
        <Link to={'/place'}>
          {props.title}
        </Link>
    </Col>
  );
};

PlaceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default PlaceListItem;