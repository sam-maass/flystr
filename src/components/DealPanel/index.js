import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import ExpansionPanel from 'material-ui/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from 'material-ui/ExpansionPanel/ExpansionPanelSummary';
import AirportChips from '../AirportChips';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ArrowIcon from 'material-ui-icons/ArrowForward';
import ExpansionPanelActions from 'material-ui/ExpansionPanel/ExpansionPanelActions';
import Button from 'material-ui/Button/Button';
const DealRow = ({
  classes,
  origins = [],
  startDate,
  endDate,
  price,
  destinations = [],
  link
}) => {
  const formattedStartDate = moment(startDate).format('DD MMM YYYY');
  const formattedEndDate = moment(endDate).format('DD MMM YYYY');
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.summary}>
          <AirportChips airports={origins} />
          <ArrowIcon />
          <AirportChips airports={destinations} />
          <Typography>
            {formattedStartDate} - <br />
            {formattedEndDate}
          </Typography>
          <Typography>{price} €</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelActions>
        <a href={link}>
          <Button size="small">Book</Button>
        </a>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

DealRow.propTypes = {
  classes: PropTypes.object,
  status: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  price: PropTypes.number,
  destinations: PropTypes.arrayOf(PropTypes.string),
  origins: PropTypes.arrayOf(PropTypes.string),
  matchingDeals: PropTypes.array,
  link: PropTypes.string
};

const styles = {
  summary: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '60px 30px 60px 1fr max-content ',
    alignItems: 'center'
  }
};

export default withStyles(styles)(DealRow);
