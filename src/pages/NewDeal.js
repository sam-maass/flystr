import React from 'react';
import PropTypes from 'prop-types';
import NewDealForm from '../components/NewDealForm';

const NewDealPage = props => {
  return (
    <div>
      <NewDealForm dealId={props.dealId} />
    </div>
  );
};

NewDealPage.propTypes = {
  dealId: PropTypes.string
};

export default NewDealPage;
