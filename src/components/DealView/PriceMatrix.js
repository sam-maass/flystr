import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { css } from 'emotion';
import { classes } from '../../styles';
import moment from 'moment';

const gridStyle = css`
  ${classes.typography.base}
  margin-top:32px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(4, minmax(max-content, 1fr));
  grid-template-rows: repeat(13, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(13, minmax(max-content, 1fr));
    grid-template-rows: repeat(4, 1fr);
  }
`;

const gridCell = ({ row, column, color }) => css`
  grid-row: ${column};
  grid-column: ${row};
  background: ${color};
  border-radius: 4px;
  text-align: center;
  height: 30px;
  display: grid;
  align-content: center;
  @media screen and (min-width: 768px) {
    grid-row: ${row};
    grid-column: ${column};
  }
`;

const colorScale = [
  '#66bb6a',
  '#9ad099',
  '#aad8a8',
  '#badfb8',
  '#cae5c9',
  '#dbecd9',
  '#ebf3ea'
];

const getColor = ({ price, minPrice }) => {
  const multiple = Math.ceil(colorScale.length * 2 * (price / minPrice - 1));
  const color =
    colorScale[multiple] ||
    (price ? colorScale[colorScale.length - 1] : 'transparent');
  return color;
};

const PriceMatrix = ({ priceMatrix = [[]], minPrice, destination }) => {
  const items = [];
  priceMatrix.forEach((row, rowIndex) =>
    row.forEach((data, columnIndex) =>
      items.push({ data: data || {}, rowIndex, columnIndex })
    )
  );
  return (
    <Paper style={{ margin: 8, padding: 16 }}>
      <Typography align="center" variant="subtitle1" component="h1">
        Lowest Fare To {destination} For Each Month
      </Typography>
      <Typography align="center" color="textSecondary">
        prices in EUR
      </Typography>
      <div className={gridStyle}>
        <div className={gridCell({ column: 1, row: 1, color: '#FAFAFA' })}>
          Duration
        </div>
        <div className={gridCell({ column: 1, row: 2, color: '#FAFAFA' })}>
          &lt; 7 days
        </div>
        <div className={gridCell({ column: 1, row: 3, color: '#FAFAFA' })}>
          &lt; 14 days
        </div>
        <div className={gridCell({ column: 1, row: 4, color: '#FAFAFA' })}>
          &gt; 14 days
        </div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(month => (
          <div
            key={`month-${month}`}
            className={gridCell({
              row: 1,
              column: month + 2,
              color: '#FAFAFA'
            })}
          >
            {moment()
              .add(month, 'months')
              .format('MMM')}
          </div>
        ))}
        {items.map(
          ({ rowIndex, columnIndex, data: { minPrice: monthlyMinPrice } }) => (
            <div
              key={`price-${rowIndex}-${columnIndex}`}
              className={gridCell({
                row: rowIndex + 2,
                column: columnIndex + 2,
                color: getColor({ price: monthlyMinPrice, minPrice })
              })}
            >
              {monthlyMinPrice && monthlyMinPrice.toFixed()}
            </div>
          )
        )}
      </div>
    </Paper>
  );
};

PriceMatrix.propTypes = {
  priceMatrix: PropTypes.array.isRequired,
  minPrice: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
};

export default PriceMatrix;
