import React from "react";
import styles from './styles.module.css';

export interface ContactItemProps {
  title: string,
  icon: string,
  url: string,
}

export default (props: ContactItemProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.icon} className={styles.img} alt={props.title}></img>
      <a className={styles.link} href={props.url} target="blank">{props.title}</a>
    </div>
  );
};