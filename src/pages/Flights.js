import React from 'react';
import AirplanemodeIcon from 'material-ui-icons/AirplanemodeInactive';
import EmptyState from '../components/EmptyState';

const FlightsPage = () => {
  return (
    <EmptyState title="No matching flights yet " icon={<AirplanemodeIcon />} />
  );
};

export default FlightsPage;
