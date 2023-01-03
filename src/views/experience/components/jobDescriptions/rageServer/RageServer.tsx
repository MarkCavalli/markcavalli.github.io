import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                When I was in school, I played GTA SAMP a lot. When the first servers started appearing in GTA 5, I thought: why don't I create my own server myself?
                I was lucky, the code for the server was running in nodejs, and I was already a little familiar with javascript. I started learning the multiplayer api, also had
                to read about databases and sql. Six months later, I decided to post my work in open source in order to continue development together with others and, possibly,
                something to learn from each other.
            </p>
            <p className={styles.p}>
                Meet - <a href="//github.com/MarkCavalli/rageserver" target="_blank" className={styles.link}>rageserver</a>. The server part was in javascript, assembled into a single file
                using webpack, mysql database, front-end was inside html pages with vue connected via a script tag. I was surprised how many people
                started supporting me. They inspired me to add a language selection, and the project was translated into several languages by the community:
                English, Russian, German, Brazilian, Chinese, Simplified Chinese, Czech. After a while I learned about typescript, as well as about vue single-page application.
            </p>
            <p className={styles.p}>
                The current project was too big to rewrite it in typescript and vue spa, so I took the best practices and started anew. This time I was set up
                launch the project in production, so all development was conducted in a private repository. For new developers, I created a template based on typescript, vue,
                vue and vuerouter - <a href="//github.com/MarkCavalli/rage-server-start-template" target="_blank" className={styles.link}>rage-server-start-template</a>.
                Soon I was called to work at a startup, so I switched to a working project.
            </p>
        </div>
    )
};