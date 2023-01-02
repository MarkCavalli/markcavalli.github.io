import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                One day I and my friend Matas discussed trading strategies. We argued for a long time which of our strategies would be the most profitable. Each of us had a different opinion,
                and we needed to check them out. Matas found a service with an api and a virtual balance, after that we wrote and launched a simple bot.
                The results were radically different from the ones we expected. We started making minor edits and launching the bot again,
                but the problem was that we had to wait about 2 weeks before we could draw any conclusions.
            </p>
            <p className={styles.p}>
                After that, we decided to write a project that would take our strategy, make trades based on historical data and visualize purchases and sales on a chart.
                The main calculation was on nodejs with typescript, the result was saved in json, after which we looked at the schedule of purchases and sales in a simple project on react.
            </p>
            <p className={styles.p}>
                Over the next few months, we came up with various strategies and tested them with our project. For a long time it did not bring results, but we were lucky
                and found one profitable strategy...
            </p>
            <p className={styles.p}>
                After we found a strategy, we needed a bot that could trade instead of us. The first version of the bot worked using REST,
                later we changed the api to websockets. Theoretically, our strategy should bring 2.57% per month, and now we are testing this theory.
            </p>
        </div>
    )
};