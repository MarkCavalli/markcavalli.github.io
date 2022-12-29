import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';


export default (props: PropsWithChildren) => {
  return (
    <button className={styles.button}>
        { props.children }
    </button>
  )
}