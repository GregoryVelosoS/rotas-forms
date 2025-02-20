import styles from "./css/Navbar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.link} to="/"> Home </NavLink>
      <NavLink className={styles.link} to="/cadastro"> Cadastro </NavLink>
      <NavLink className={styles.link} to="/contato"> Contato </NavLink>
      <NavLink className={styles.link} to="/sobre"> Sobre </NavLink>
    </nav>
  );
};

export default NavBar;
