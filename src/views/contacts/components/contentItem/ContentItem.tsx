import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';

export interface ContactItemProps extends PropsWithChildren {
  title: string,
}

export default (props: ContactItemProps) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{ props.title }</h3>
      { props.children }
    </div>
  );
};