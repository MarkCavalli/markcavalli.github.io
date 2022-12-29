import React from "react";
import styles from './styles.module.css';
import Attachment from './attachment.svg';
import cvFile from './aleksei-osinnii-cv.pdf';

export default () => {
  return (
    <span className={styles.wrap}>
      <img src={Attachment} className={styles.img}></img>
      <a href={cvFile} target="blank" className={styles.link}>aleksei-osinnii-cv.pdf</a>
      <span className={styles.size}>(701 KB)</span>
    </span>
  );
};