import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  justifyItems: 'center'
};

const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const Footer = () => (
  <div style={style}>
    <Typography>
      <a style={footerLinkStyle} href="https://twitter.com/flystr_com">
        Twitter
      </a>
    </Typography>
    <Typography>
      <a
        style={footerLinkStyle}
        href="https://www.instagram.com/flystr_dot_com/"
      >
        Instagram
      </a>
    </Typography>
    <Typography>
      <a style={footerLinkStyle} href="/impressum">
        Impressum
      </a>
    </Typography>
  </div>
);

export default Footer;
