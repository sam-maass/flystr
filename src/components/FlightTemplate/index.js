import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableField from './editableField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import PermaDeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import { css } from 'emotion';
import SelectLink from './selectLink';

class FlightTemplate extends Component {
  constructor(props) {
    super(props);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      originalLink: this.props.template.link
    };
  }

  handleLinkChange = ({ index, link }) => {
    this.props.handleChange({ atIndex: index, key: 'link', value: link.url });
  };

  handleFieldChange = fieldName => {
    return value =>
      this.props.handleChange({
        atIndex: this.props.index,
        key: fieldName,
        value
      });
  };

  render() {
    const {
      outOrigin,
      outDate,
      outDestination,
      inDate,
      price,
      _id
    } = this.props.template;
    return (
      <div className={style}>
        <div className="link">
          <SelectLink
            index={this.props.index}
            flight={this.props.template}
            originalLink={this.state.originalLink}
            onChange={this.handleLinkChange}
          />
        </div>
        <EditableField
          value={{ outOrigin }}
          onChange={this.handleFieldChange}
        />
        <EditableField value={{ outDate }} onChange={this.handleFieldChange} />
        <EditableField
          value={{ outDestination }}
          onChange={this.handleFieldChange}
        />
        <EditableField value={{ inDate }} onChange={this.handleFieldChange} />
        <EditableField value={{ price }} onChange={this.handleFieldChange} />
        <div className="actions">
          <IconButton color="primary" onClick={this.props.onAddFlight}>
            <SaveIcon />
          </IconButton>
          <IconButton color="primary" onClick={this.props.onRemoveFlight}>
            <DeleteIcon />
          </IconButton>
          {_id && (
            <IconButton
              color="primary"
              onClick={this.props.onRemoveFlightPermanently}
            >
              <PermaDeleteIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  }
}

FlightTemplate.propTypes = {
  handleChange: PropTypes.func,
  onAddFlight: PropTypes.func,
  onRemoveFlight: PropTypes.func,
  onRemoveFlightPermanently: PropTypes.func,
  template: PropTypes.object,
  index: PropTypes.index
};

const style = css`
  margin: auto;
  margin-top: 8px;
  display: grid;
  gap: 32px;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  background: #eee;
  grid-template-columns: 100px 70px 100px 70px 100px 70px 150px;
`;

export default FlightTemplate;
