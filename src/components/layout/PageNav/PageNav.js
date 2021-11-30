import Button from '@mui/material/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './PageNav.module.scss';

const PageNav = () => (
  <div className={styles.component}>
    <Button>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    </Button>
  </div>
);

export default PageNav;