import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import WorkItem from './components/workItem/WorkItem'
import FilterButton from './components/filterButton/FilterButton';
import { JobFilter, jobs, filterMenu } from './constants'
import { JobType } from "./components/workItem/constants";

export default () => {
    const filter = getJobFilterType()
    const list = getFilteredJobs(filter);
    const navigate = useNavigate();

    return (
        <section className={styles.main}>
            <div className={styles.menu}>
                {filterMenu.map((item, i) => <FilterButton key={i} active={item.type === filter} onClick={() => navigate(item.route)}>{item.name}</FilterButton>)}
            </div>

            {list.map((d, i) =>
                <WorkItem key={i} job={d}>
                    {d.desc && d.desc}
                </WorkItem>)}
        </section>
    )
};

function getJobFilterType() {
    const { type } = useParams();
    const def = JobFilter.Production;
    if (!type) {
        return def;
    }
    if (type === JobFilter.All || type === JobFilter.Pet || type === JobFilter.Production) {
        return type;
    }
    return def;
}

function getFilteredJobs(filter: JobFilter) {
    let list = jobs.slice();
    if (filter === JobFilter.Production) {
        list = list.filter((item) => item.type === JobType.Work);
    } else if (filter === JobFilter.Pet) {
        list = list.filter((item) => item.type === JobType.Pet);
    }

    list.sort((a, b) => {
        const aDate = new Date(a.fromDate.year, a.fromDate.month - 1);
        const bDate = new Date(b.fromDate.year, b.fromDate.month - 1);
        return bDate.getTime() - aDate.getTime()
    });

    return list;
}