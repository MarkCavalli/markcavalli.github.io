import React from "react";
import styles from './styles.module.css';
import WorkItem from './components/workItem/WorkItem'
import { jobs } from './constants'

export default () => {
    return (
        <section className={styles.main}>
            {jobs.map((d, i) => <WorkItem key={i} job={d}>
                {d.desc && d.desc}
            </WorkItem>)}
        </section>
    )
};

