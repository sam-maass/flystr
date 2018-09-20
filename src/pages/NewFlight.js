import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrlParser from '../components/UrlParser';
import { addFlightTemplates } from '../actions/flightTemplateActions';
import { connect } from 'react-redux';

class NewFlightPage extends Component {
  constructor(props) {
    super(props);
    this.handleUrlParse = this.handleUrlParse.bind(this);
  }

  componentDidMount() {
    // load data
  }

  handleUrlParse(flightTemplates) {
    this.props.addFlightTemplates(flightTemplates);
  }

  render() {
    return (
      <div>
        <UrlParser onParse={this.handleUrlParse} />
      </div>
    );
  }
}

NewFlightPage.propTypes = {
  addFlightTemplates: PropTypes.func
};

const mapStateToProps = (store, props) => {
  return {
    flightTepmplates: store.flightTepmplates,
    ...props
  };
};

export default connect(
  mapStateToProps,
  { addFlightTemplates }
)(NewFlightPage);
