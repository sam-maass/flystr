import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card, { CardContent } from 'material-ui/Card';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button/Button';
import { Link } from 'react-router-dom';
import qs from 'qs';


const DealRow = ({
  name,
  classes,
  matchingDeals = [],
}) => {
  const searchString = qs.stringify({ ids: matchingDeals.map(deal => deal._id) });
  return (
    <Card>
      <CardContent>
        <div className={classes.dealItem}>
          <Typography className={classes.dealHeader} type="title">
            {name}
          </Typography>
          {matchingDeals.map(deal => {
            return (
              [<Typography key={`${deal._id}-1`} color="secondary">{deal.origins}-{deal.destinations}</Typography>,
              <Typography key={`${deal._id}-2`} color="secondary"> {moment(deal.startDate).format('MMM YYYY')}</Typography>,
              <Typography key={`${deal._id}-3`} color=""> {deal.price}€</Typography>]
            );
          })}
        </div>
      </CardContent>
      <CardActions>
        <Link
          to={{ pathname: '/deals', search: searchString }}
        >
          <Button size="small" color="primary">
            all options
          </Button></Link>
      </CardActions>
    </Card>
  );
};

DealRow.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  matchingDeals: PropTypes.array
};

const styles = {
  dealItem: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr min-content',
    gridRowGap: '4px'
  },
  dealHeader: {
    gridColumn: '1/span 3'
  },
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
  }
};

export default withStyles(styles)(DealRow);
