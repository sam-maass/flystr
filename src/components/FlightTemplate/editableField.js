import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class EditableField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fieldName = Object.keys(this.props.value)[0];
    this.props.onChange(fieldName)(e.target.value);
  }

  render() {
    const { value } = this.props;
    const fieldName = Object.keys(value)[0];
    const fieldValue = value[fieldName];
    return (
      <div className={fieldName}>
        <TextField
          label={fieldName}
          fullWidth
          value={fieldValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

EditableField.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default EditableField;
