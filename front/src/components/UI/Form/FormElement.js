import React from 'react';
import PropTypes from 'prop-types';
import {Col, ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

const FormElement = props => (
  <FormGroup
    controlId={props.propertyName}
    validationState={props.error && 'error'}>

    <Col componentClass={ControlLabel} sm={2}>
      {props.title}
    </Col>
    <Col sm={10}>
      <FormControl
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
        name={props.propertyName}
        value={props.value}
        onChange={props.changeHandler}
        autoComplete={props.autoComplete}
      />
      {props.error &&
      <HelpBlock>{props.error}</HelpBlock>
      }
    </Col>
  </FormGroup>
);

FormElement.propTypes = {
  propertyName: PropTypes.string.isRequired,
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  changeHandler: PropTypes.func.isRequired,
  autoComplete: PropTypes.string
};

export default FormElement;
