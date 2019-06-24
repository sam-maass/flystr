import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const AdminRoutesList = ({ routes = [], deleteRoute, setPublished }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Published</TableCell>
            <TableCell>Route</TableCell>
            <TableCell>Current Min Price</TableCell>
            <TableCell>Price Range</TableCell>
            <TableCell>Rating / Saving</TableCell>
            <TableCell>Last Crawled</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map(route => (
            <TableRow key={route._id}>
              <TableCell>
                <Switch
                  checked={route.isPublishedAsDeal}
                  onChange={() => {
                    setPublished({
                      routeId: route._id,
                      isPublishedAsDeal: !route.isPublishedAsDeal
                    });
                  }}
                  value="published"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                {!route.isPublishedAsDeal && (
                  <IconButton
                    aria-label="Delete"
                    onClick={() => {
                      deleteRoute(route._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell>
                {route.origin.iata} - {route.destination.iata}
              </TableCell>
              <TableCell>{route.currentMinPrice} EUR</TableCell>
              <TableCell>
                {route.lowerEndPrice} - {route.higherEndPrice} EUR
              </TableCell>
              <TableCell>
                {route.rareness} / {route.saving} %
              </TableCell>
              <TableCell>
                {moment(route.lastCrawled).fromNow()} <br />
                <small>
                  {moment(route.lastCrawled).format('DD.MM.YYYY HH:mm')}
                </small>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

AdminRoutesList.propTypes = {
  routes: PropTypes.array,
  deleteRoute: PropTypes.func,
  setPublished: PropTypes.func
};

export default AdminRoutesList;
