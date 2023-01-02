import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                In December 2020, I met my good friend: his name is Matas, he is from Lithuania. Matas is also passionate about programming, and especially automation and content grabbing.
                Together we are constantly doing various projects in which I try to monitor the architecture and quality of the code.
                Among them there are projects such as the ticktok/youtube video downloader, the crypto api service, a social feed (posts from different platforms in one place),
                testing trading strategies.
            </p>
            <p className={styles.p}>
                After university, Matas was lucky to find his first job as a developer almost immediately. He was one of several people out of 100+ who were accepted for an internship.
                At the moment, the internship has been successfully completed, he has received a position with a permanent contract in an international company.
            </p>
        </div>
    )
};