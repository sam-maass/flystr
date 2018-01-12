import React from 'react';
import LaterIcon from 'material-ui-icons/WatchLater';
import EmptyState from '../components/EmptyState';

const NewDealPage = () => {
  return <EmptyState title="Coming soon" icon={<LaterIcon />} />;
};

export default NewDealPage;
