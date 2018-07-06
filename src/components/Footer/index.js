import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { classes, styles } from '../../styles';

const containerStyle = css`
  ${classes.typography.base} display:grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 96px;
  margin-bottom: 16px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  a {
    text-decoration: none;
    color: ${styles.colors.midGray};
    &:hover {
      color: ${styles.colors.darkGray};
    }
  }
  .copyright {
    grid-column: 1 / -1;
    color: ${styles.colors.lightGray};
  }
`;

const Footer = () => (
  <div className={containerStyle}>
    <a href="https://twitter.com/flystr_com">Twitter</a>
    <a href="https://www.instagram.com/flystr_dot_com/">Instagram</a>
    <Link to="/legal">Privacy Policy</Link>
    <div className="copyright"> &copy; Flyster, 2018</div>
  </div>
);

export default Footer;
