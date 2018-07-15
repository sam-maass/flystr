import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRight from '@material-ui/icons/ArrowForward';
import AirportChips from '../AirportChips';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const TripRow = ({
  classes,
  origins = [],
  name,
  startDate,
  endDate,
  matchingDeals,
  budget,
  _id,
  destinations = []
}) => {
  const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
  const formattedEndDate = moment(endDate).format('DD.MM.YYYY');
  const days = moment(endDate).diff(moment(startDate), 'days');
  return (
    <Card>
      <CardContent>
        <Typography variant="headline">
          <span>{name}</span>
        </Typography>
        <Typography variant="subheading" className={classes.chipContainer}>
          <AirportChips airports={origins} styleClass={classes.chip} />
          <ArrowRight />
          <AirportChips airports={destinations} styleClass={classes.chip} />
        </Typography>
        <div className={classes.details}>
          <Typography color="textSecondary">
            {formattedStartDate} - {formattedEndDate}
          </Typography>
          <Typography color="textSecondary">max {days} days</Typography>
          <Typography color="textSecondary">max {budget} €</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Link className={classes.noLink} to={`/trip/${_id}`}>
          <Button size="small" color="primary">
            {matchingDeals.length} Deals
          </Button>
        </Link>
        <Link className={classes.noLink} to={`/trip/${_id}/edit`}>
          <Button size="small">Change Trip</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

TripRow.propTypes = {
  _id: PropTypes.string,
  classes: PropTypes.object,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  name: PropTypes.string,
  budget: PropTypes.number,
  destinations: PropTypes.arrayOf(PropTypes.string),
  origins: PropTypes.arrayOf(PropTypes.string),
  matchingDeals: PropTypes.array
};

const styles = {
  chipContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  chip: {
    fontWeight: 'bold',
    margin: '4px'
  },
  titleBar: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr max-content'
  },
  details: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)'
  },
  noLink: {
    textDecoration: 'none'
  }
};

export default withStyles(styles)(TripRow);
