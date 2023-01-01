import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                <a href="//www.adacta-fintech.com" target="_blank" className={styles.link}>Adacta</a> – an international company with its head office in Slovenia.
                I worked on the AdInsure – technology project supporting all insurance business processes and connecting teams within one software system.
                Our team developed and supported solutions for "Raiffeisen Life" insurance company.
            </p>
            <p className={styles.p}>
                Part of the business logic was written in <b>javascript</b>, <b>Angular</b> with <b>typescript</b> was used as a framework, with many configs based on <b>json</b>.
                One of the most important tasks for me was the task of replacing the date frame <b>moment.js </b> on <b>date-fns</b>.
            </p>
        </div>
    )
};