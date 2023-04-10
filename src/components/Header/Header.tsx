import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}

const Header = ({isAuth, login}: HeaderPropsType) => {
  return (
    <header className={styles.header}>
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" />
      <div className={styles.loginBlock}>
        {isAuth 
          ? login
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  );
};

export default Header;
