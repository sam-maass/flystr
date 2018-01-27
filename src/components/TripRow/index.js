import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card, { CardContent } from 'material-ui/Card';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import IconButton from 'material-ui/IconButton/IconButton';
import FavoriteIcon from 'material-ui-icons/FlightTakeoff';
import qs from 'qs';
import SettingsIcon from 'material-ui-icons/Settings';
import ArrowRight from "material-ui-icons/ArrowForward";
import AirportChips from '../AirportChips';


const TripRow = ({
  classes,
  origins = [],
  name,
  startDate,
  endDate,
  matchingDeals,
  budget,
  destinations = []
}) => {
  const formattedStartDate = moment(startDate).format('DD.MM.YYYY');
  const formattedEndDate = moment(endDate).format('DD.MM.YYYY');
  const days = moment(endDate).diff(moment(startDate), 'days');
  const searchString = qs.stringify({ ids: matchingDeals });
  return (
    <Card>
      <CardContent>
        <div className={classes.titleBar}>
          <Typography type="headline">
            <span>{name}</span>
          </Typography>
          <div>
            <Link
              className={classes.noLink}
              to={{ pathname: '/deals', search: searchString }}
            >
              <IconButton aria-label="See deals">
                {matchingDeals.length}
                <FavoriteIcon />
              </IconButton>
            </Link>
            <IconButton aria-label="See deals">
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <Typography type="subheading" className={classes.chipContainer}>
          <AirportChips airports={origins} styleClass={classes.chip}></AirportChips>
          <ArrowRight />
          <AirportChips airports={destinations} styleClass={classes.chip}></AirportChips>
        </Typography>
        <div className={classes.details}>
          <Typography color="secondary">
            {formattedStartDate} - {formattedEndDate}
          </Typography>
          <Typography color="secondary">max {days} days</Typography>
          <Typography color="secondary">max {budget} €</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TripRow.propTypes = {
  classes: PropTypes.object,
  status: PropTypes.string,
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
    gridTemplateColumns: 'repeat(1,1fr)',
  },
  noLink: {
    textDecoration: 'none'
  }
};

export default withStyles(styles)(TripRow);
