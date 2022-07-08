import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Navigation = () => (
  <div className="navigation">
    <Link className="navigation__link" to="/">
      Home
    </Link>
    <Link className="navigation__link" to="manage-licenses">
      Manage licenses
    </Link>
  </div>
);

export default Navigation;
