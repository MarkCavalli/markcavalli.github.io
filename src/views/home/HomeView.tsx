import React from "react";
import styles from './styles.module.css';
import Button from '../../components/button/Button';
import { Link } from "react-router-dom";

export default () => {
  return (
    <section className={styles.main}>
      <p>
        Hi, I'm Aleksei Osinnii
      </p>
      <h1 className={styles.title}>Front-end Developer</h1>
      <p>
        Constantly looking forward for a new opportunities and competitions.
      </p>
      <Link className={styles.button} to="/experience">
        <Button>See my projects</Button>
      </Link>
    </section>
  )
};