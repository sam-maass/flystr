import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';
import { css } from 'emotion';
import { api } from '../../settings';

class DealPartialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.createDeal = this.createDeal.bind(this);
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  createDeal = () => {
    const { title, subtitle } = this.state;
    const exampleFlights = this.props.selectedFlights;
    api().post('/deal', { title, subtitle, exampleFlights });
    this.setState({ title: '', subtitle: '' });
    setTimeout(() => this.props.afterPost(), 100);
  };

  render() {
    return (
      <div className={style}>
        <TextField
          value={this.state.title}
          label="title / destination"
          onChange={this.handleChange('title')}
        />
        <TextField
          value={this.state.subtitle}
          label="subtitle / origin"
          onChange={this.handleChange('subtitle')}
        />
        <Button onClick={this.createDeal}>
          Create deal ({this.props.selectedFlights.length} flights)
        </Button>
      </div>
    );
  }
}

DealPartialForm.propTypes = {
  selectedFlights: PropTypes.array,
  afterPost: PropTypes.func
};

const style = css`
  display: grid;
  max-width: 800px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 8px;
  padding: 8px;
  background: #eee;
`;

export default DealPartialForm;
