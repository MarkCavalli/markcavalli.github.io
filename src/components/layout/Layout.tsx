import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';
import MainMenu from '../mainMenu/MainMenu';


export default (props: PropsWithChildren) => {
  return (
    <section className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.menu}>
          <MainMenu />
        </div>
        { props.children }
      </div>
    </section>
  )
}