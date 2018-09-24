import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import { parseLinksFromText } from '../NewDealForm/parseLink';
import { css } from 'emotion';

class UrlParser extends Component {
  constructor(props) {
    super(props);
    this.state = { fieldValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.parseUrls = this.parseUrls.bind(this);
  }

  handleChange(e) {
    this.setState({ fieldValue: e.target.value });
  }

  parseUrls() {
    const links = this.state.fieldValue;
    const flightTemplateArray = parseLinksFromText(links);
    this.props.onParse(flightTemplateArray);
    this.setState({ fieldValue: '' });
  }

  render() {
    return (
      <div className={style}>
        <TextField
          label="Links to parse"
          value={this.state.fieldValue}
          onChange={this.handleChange}
        />
        <div>
          <Button variant="raised" color="primary" onClick={this.parseUrls}>
            Parse Links
          </Button>
        </div>
      </div>
    );
  }
}

UrlParser.propTypes = {
  onParse: PropTypes.func
};

const style = css`
  max-width: 600px;
  margin: auto;
  display: grid;
  align-items: flex-end;
  grid-template-columns: 1fr 150px;
  gap: 16px;
`;

export default UrlParser;
