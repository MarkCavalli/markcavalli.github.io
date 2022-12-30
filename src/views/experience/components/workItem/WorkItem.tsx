import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { WorkItemData, tagColor, ShortDate, monthNameShort } from "./constants";
import Tag from '../../../../components/tag/Tag';

export interface WorkItemProps extends PropsWithChildren {
    job: WorkItemData;
}

export default (props: WorkItemProps) => {
    const job = props.job;

    const getDate = (date: ShortDate) => {
        const now = new Date();
        if (now.getFullYear() < date.year) return 'Present';
        return monthNameShort[date.month - 1] + ' ' + date.year;
    }

    return (
        <section className={styles.main}>
            <div className={styles.titleBlock}>
                <h4 className={styles.title}>{job.title}</h4>
                <div className={styles.date}>{getDate(job.fromDate)} - {getDate(job.toDate)}</div>
            </div>
            {job.position && <h5 className={styles.position}>{job.position}</h5>}
            <div className={styles.tags}>
                {job.tags.map((d, i) => (
                    <Tag key={i} color={tagColor.get(d)}>{d}</Tag>
                ))}
            </div>
            {props.children && <div className={styles.about}>{props.children}</div>}
        </section>
    );
};
