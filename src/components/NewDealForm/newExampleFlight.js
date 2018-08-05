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

  componentDidUpdate(prevProps) {
    const { flight } = this.props;
    if (prevProps.flight.link !== flight.link && flight.link) {
      this.props.setValues(flight);
      this.setState({ showUrlField: false });
    }
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
    this.props.handleSave(this.props.values);
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
          <FormikTextField elemKey="outDate" {...props} />
          <FormikTextField elemKey="outOrigin" {...props} />
          <FormikTextField elemKey="outDestination" {...props} />
          <FormikTextField elemKey="outCarriers" {...props} />
          <FormikTextField elemKey="inDate" {...props} />
          <FormikTextField elemKey="inOrigin" {...props} />
          <FormikTextField elemKey="inDestination" {...props} />
          <FormikTextField elemKey="inCarriers" {...props} />
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
  handleSave: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  flight: PropTypes.object
};

export default withFormik({
  mapPropsToValues: () => {
    return { link: '' };
  }
})(NewExampleFlight);
