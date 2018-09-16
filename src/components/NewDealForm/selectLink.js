import React from 'react';
import PropTypes from 'prop-types';
import { createOtaLinks } from './createOtaLinks';

class SelectLink extends React.Component {
  state = { links: [] };
  componentDidMount() {
    const { flight } = this.props;
    const links = createOtaLinks(flight, flight.link);
    this.setState({ links });
  }

  render() {
    const { selectedLink = 'original', onChange, index } = this.props;
    const { links } = this.state;
    return (
      <div className="link">
        {links.map(link => {
          return (
            <div key={Math.random()}>
              <label htmlFor={link.displayName}>
                <input
                  type="radio"
                  name={`selectedLink${index}`}
                  value={link.displayName}
                  onChange={() => onChange(link)}
                  checked={selectedLink === link.displayName}
                />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.url}
                >
                  {link.displayName}
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
  index: PropTypes.number,
  selectedLink: PropTypes.string,
  flight: PropTypes.object,
  onChange: PropTypes.function
};

export default SelectLink;
