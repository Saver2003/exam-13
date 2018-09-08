import React, { Component } from 'react';
import FormElement from '../UI/Form/FormElement';
import {Button, Col, Form, FormGroup} from "react-bootstrap";

class PlaceForm extends Component {
  state = {
    title: '',
    feedBack: '',
    image: ''
  };

  submitFormHandler = event => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    this.props.onSubmit(formData);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.submitFormHandler}>
        <FormElement
          propertyName="title"
          title="Place Title"
          type="text"
          value={this.state.title}
          changeHandler={this.inputChangeHandler}
        />

        <FormElement
          propertyName="image"
          title="Place image"
          type="file"
          changeHandler={this.fileChangeHandler}
        />

        <FormGroup>
          <Col>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

export default PlaceForm;