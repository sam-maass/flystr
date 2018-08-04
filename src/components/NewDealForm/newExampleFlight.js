import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import FormikTextField from '../FormikTextField';
import Button from '@material-ui/core/Button';
import { parseLink } from './parseLink';

class NewExampleFlight extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFlight = this.handleAddFlight.bind(this);
    this.handleParseLink = this.handleParseLink.bind(this);
  }

  state = {
    showUrlField: true
  };

  handleParseLink = () => {
    const { link } = this.props.values;
    const linkParams = parseLink(link);
    this.setState({ showUrlField: false });
    this.props.setValues(linkParams);
  };

  handleAddFlight = () => {
    this.props.onSave(this.props.values);
    this.props.resetForm();
    this.setState({ showUrlField: true });
  };

  render() {
    const { showUrlField } = this.state;
    const { props } = this;
    if (showUrlField) {
      return (
        <Fragment>
          <div className="link fullwidth">
            <FormikTextField fullWidth elemKey="link" label="Link" {...props} />
          </div>
          <div className="action">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleParseLink}
            >
              Parse Link
            </Button>
          </div>
        </Fragment>
      );
    } else
      return (
        <Fragment>
          <div>
            <div className="link">
              <a href={props.values.link}>{props.values.linkSource}</a>
            </div>
          </div>
          <FormikTextField elemKey="outDate" type="date" {...props} />
          <FormikTextField elemKey="outDep" {...props} />
          <FormikTextField elemKey="outArr" {...props} />
          <FormikTextField elemKey="outCarriers" type="text" {...props} />
          <FormikTextField elemKey="inDate" type="date" {...props} />
          <FormikTextField elemKey="inDep" {...props} />
          <FormikTextField elemKey="inArr" {...props} />
          <FormikTextField elemKey="inCarriers" type="text" {...props} />
          <FormikTextField elemKey="price" type="number" {...props} />
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleAddFlight}
          >
            Add flight
          </Button>
        </Fragment>
      );
  }
}

NewExampleFlight.propTypes = {
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default withFormik({})(NewExampleFlight);
