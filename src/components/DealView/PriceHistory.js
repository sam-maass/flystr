import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { XYPlot, XAxis, YAxis, AreaSeries, LineSeries } from 'react-vis';
import moment from 'moment';

function dateTickFormatter(value) {
  return moment(value).format('DD.MM.');
}

function priceTickFormatter(value) {
  return `${value} EUR`;
}
export class PriceHistory extends React.Component {
  state = { plotWidth: 0 };
  constructor(props) {
    super(props);
    this.containingElement = React.createRef();
  }
  componentDidMount() {
    this.setState({ plotWidth: this.containingElement.current.offsetWidth });
  }
  render() {
    const historicMinPrice = Math.min(
      ...this.props.priceHistory.map(i => i.minPrice)
    );
    const plotData = this.props.priceHistory
      .filter((i, index) => {
        const { minPrice } = i;
        const nextPrice = (this.props.priceHistory[index + 1] || {}).minPrice;
        const prevPrice = (this.props.priceHistory[index - 1] || {}).minPrice;

        const keep = minPrice !== nextPrice || minPrice !== prevPrice;

        return keep;
      })
      .map(i => {
        return {
          x: new Date(i.date),
          y: i.minPrice,
          y0: historicMinPrice * 0.98
        };
      });

    return (
      <div ref={this.containingElement}>
        <Paper style={{ padding: '16px', margin: '8px' }}>
          <Typography align="center" variant="subtitle1" component="h2">
            Price Trend From {this.props.from} To {this.props.to}
          </Typography>
          <Typography align="center" color="textSecondary" component="h3">
            Historic Lowest Flight Prices
          </Typography>
          <XYPlot
            width={this.state.plotWidth - 32}
            height={Math.min(this.state.plotWidth / 4, 150)}
            margin={{ left: 80, right: 20, top: 10, bottom: 40 }}
          >
            <AreaSeries data={plotData} color="#009688" opacity={0.1} />
            <LineSeries
              data={plotData}
              color="#009688"
              style={{
                fill: 'transparent'
              }}
            />

            <XAxis
              tickTotal={Math.round(this.state.plotWidth / 150)}
              tickFormat={dateTickFormatter}
              style={{
                text: {
                  stroke: 'none',
                  fill: '#263238',
                  fontFamily: '"Open Sans", sans-serif'
                }
              }}
            />
            <YAxis
              width={80}
              tickTotal={Math.min(Math.round(this.state.plotWidth / 150), 4)}
              tickFormat={priceTickFormatter}
              style={{
                text: {
                  stroke: 'none',
                  fill: '#263238',
                  fontFamily: '"Open Sans", sans-serif'
                }
              }}
            />
          </XYPlot>
        </Paper>
      </div>
    );
  }
}

PriceHistory.propTypes = {
  priceHistory: PropTypes.array,
  from: PropTypes.string,
  to: PropTypes.string
};
