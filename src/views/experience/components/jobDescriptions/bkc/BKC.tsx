import React from "react";
import styles from './styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                <a href="//bkc.ru" target="_blank" className={styles.link}>BKC International House</a> – the largest network of foreign language schools in Moscow,
                a member of the International House World Organisation and an approved Cambridge and IELTS examination centre. This is my first job as a front-end developer.
                My responsibilities included creating mock-ups of email newsletters and making mailings in the
                service <a href="//mailchimp.com" target="_blank" className={styles.link}>mailchimp.com</a>, create landing pages, make edits on the main site.
                The company also had several sites of country holiday homes and volunteer organizations, sometimes I was engaged in these sites.</p>
            <p className={styles.p}>
                <b>php</b> was used as the backend, <b>javascript</b> was on the front, mixed with <b>jQuery</b>.
                I was one front-end developer, so some global modules and improvements were given to outsource.
                Thus, one day a test passing service appeared on the <b>vue</b> framework.
            </p>
            <p className={styles.p}>
                From that moment on, I started learning <b>vue</b>, and also trying to use it in my
                pet-project <a href="//github.com/MarkCavalli/rageserver" target="_blank" className={styles.link}>RAGE Server</a>.
                After a while, I was assigned to create a mini-game "Crossword Puzzle" to get a discount, which I successfully solved with using <b>vue</b>.
                Interestingly, they still use <a href="//www.bkc.ru/landing/crossword" target="_blank" className={styles.link}>this game</a>!
                Of course, the design has already been changed, but I recognize my css classes in the BEM style.
            </p>
        </div>
    )
};