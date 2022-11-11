import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import User from '../User/User';

import styles from './Navbar.module.css';

function Navbar({ hidden, toogleDrawer }) {
  const [user, setUser] = useState()
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  let location = useLocation();

  useEffect(() => {
    if (sessionStorage.user && sessionStorage.userLoggedIn) {
      setUser(JSON.parse(sessionStorage.user))
      setUserLoggedIn(JSON.parse(sessionStorage.userLoggedIn))
    }
  },[])

  const onClickHamburger = () => {
    toogleDrawer();
  };

  return (
    <nav className={`${styles.navbar} ${hidden && styles.navbar_hidden}`}>
      <Link to="/">
        <div className={styles.logo_container}>
          <img
            alt="logo"
            className={styles.logo_image}
            src='https://grupo2-frontend-images.s3.us-east-2.amazonaws.com/images/logo-1.svg'
          />
          <p className={styles.logo_text}>Sentite como en tu hogar</p>
        </div>
      </Link>
      { !userLoggedIn ? <section className={styles.nav_menu}>
        {location.pathname !== '/register' && (
          <button className="btn-outlined">
            <Link to="register">Crear Cuenta</Link>
          </button>
        )}
        {location.pathname !== '/login' && (
          <button className="btn-outlined">
            <Link to="login">Iniciar sesión</Link>
          </button>
        )}
        </section> :
        <section className={styles.nav_menu}>
          <User user={user}/>
        </section>}
      <div className={styles.hamburger} onClick={onClickHamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}

export default Navbar;
