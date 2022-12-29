import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

export default () => {
  return (
    <ul className={styles.menuBlock}>
      <li className={styles.menuItem}>
        <Link className={styles.link} to="/">Home</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.link} to="/experience">Experience</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.link} to="/contacts">Contact</Link>
      </li>
    </ul>
  )
};