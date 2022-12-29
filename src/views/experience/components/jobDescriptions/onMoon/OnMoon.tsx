import React from "react";
import styles from './styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                <a href="//onmoon.ru" target="_blank" className={styles.link}>OnMoon</a> - IT company with various projects,
                including: payment system, trading platforms, game portal, games and much more. The best company I worked so far.
            </p>
            <p className={styles.p}>
                After I left the startup, I published my resume and started looking for a job. As it turned out, the guys from the OnMoon company started developing a couple of months ago
                their GTA 5 Role Play server project based on my open source <a href="//github.com/MarkCavalli/rageserver " target="_blank" className={styles.link}>RAGE Server</a>.
                After seeing my resume, they invited me to join. As a result, we have the following stack:
                server part on <b>nodejs</b> and <b>typescript</b> with database <b>postgesql</b>, frontend on <b>vue, vuex, vuerouter</b>.
            </p>
            <p className={styles.p}>
                I was the only frontend developer in the team, so the whole frontend was on me. When there were no tasks, I switched to the backend. My main improvements were the task to display
                The UI is the same on all screen resolutions (from 480p to 4k) and implement support for sprites with icons. It was easy to do because I had already come up with this technique in the past.
                In general, the front was stable and there were no problems with it.
            </p>
            <div className={styles.p}>
                Of the global modules that I developed were:
                <ul className={styles.ul}>
                    <li>Marketplace (a place where players put up lots to buy and sell items)</li>
                    <li>Quest system (training for beginners, in-game work, tasks for organizations)</li>
                    <li>Nutrition and calorie system (character's health depends on nutrition)</li>
                    <li>Realistic calculation of fuel consumption in transport (depending on speed, gearbox, etc.)</li>
                    <li>And many other functions</li>
                </ul>
            </div>
            <p className={styles.p}>
                A year after the online launch, the project began to fall, the team decided to add NFT and remake the project into a play-to-earn with payments in cryptocurrency.
                I was not inspired by this idea, so I started looking for a new job.
            </p>
        </div>
    )
};