import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                Almost every blogger has several social accounts on different websites. They leave links under each post and urge you to subscribe there as well.
                You don't seem to mind watching content on other websites, but you're too lazy, you don't have an account/application, or there are other personal reasons.
                I'm one of those people.
            </p>
            <p className={styles.p}>
                Together with Matas, we came up with a service where a users can subscribe to their favorite bloggers and choose the sources of posts (youtube, instagram, tiktok and others)
                that they would like to see in the feed. We launched bots that used puppeteer to check websites for new posts and, if necessary, upload them to our service.
                We wrote a separate cdn server that stored the downloaded content. The API was made in the form of a gateway main server and many microservices that interacted with each other
                with Kafka and were launched in docker containers. All microservices were written in typescript with a postgresql database.
            </p>
        </div>
    )
};