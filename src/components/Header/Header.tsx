import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logoutThunkCreator: () => void
}

const Header = ({isAuth, login, logoutThunkCreator}: HeaderPropsType) => {
  return (
    <header className={styles.header}>
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" />
      <div className={styles.loginBlock}>
        {isAuth 
          ? <div>{login} - <button onClick={logoutThunkCreator}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
