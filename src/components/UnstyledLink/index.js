import React from 'react';
import { Link } from 'react-router-dom';

export const UnstyledLink = props => {
  return (
    <Link style={{ color: 'inherit', textDecoration: 'none' }} {...props} />
  );
};
