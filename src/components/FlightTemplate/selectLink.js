import React from 'react';
import PropTypes from 'prop-types';
import { createOtaLinks } from './createOtaLinks';
import { css } from 'emotion';

class SelectLink extends React.Component {
  state = { links: [] };
  componentDidMount() {
    const { flight } = this.props;
    const links = createOtaLinks(flight, flight.link);
    this.setState({ links });
  }

  render() {
    const { index, onChange, flight } = this.props;
    const { links } = this.state;
    return (
      <div className={style}>
        {links.map(link => {
          return (
            <div key={Math.random()}>
              <label htmlFor={link.displayName}>
                <input
                  type="radio"
                  name={`selectedLink${index}`}
                  value={link.displayName}
                  onChange={() => onChange({ index, link })}
                  checked={flight.link === link.url}
                />
                <br />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.url}
                >
                  {link.displayName[0].toUpperCase()}
                </a>
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

SelectLink.propTypes = {
  originalLink: PropTypes.string,
  selectedLink: PropTypes.string,
  flight: PropTypes.object,
  onChange: PropTypes.function,
  index: PropTypes.number
};

const style = css`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  text-align: center;
  justify-items: center;
`;

export default SelectLink;
