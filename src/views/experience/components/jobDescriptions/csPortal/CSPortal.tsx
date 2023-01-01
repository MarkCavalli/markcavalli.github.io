import React from "react";
import styles from './styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                I have loved computers and programming since childhood. Every day after school I sat down at the computer and studied something new.
                I created my own server for Counter Strike 1.6, where me and the guys from my city were going to play after school.
                Then I started creating my own maps for cs 1.6 and adding them to my server. One day I came up with an idea - why not put my work somewhere and share it with others.
            </p>
            <p className={styles.p}>
                I created my first website at the age of 15 - <a href="//freeskill.ucoz.ru" target="_blank" className={styles.link}>freeskill.ucoz.ru</a>.
                From that moment I started learning html and css. I have done a complete redesign of the website about 20 times аt all the time.
                After a while, my parents gave me the book "Fundamentals of javascript". After that, I started doing various interactive things.
                For example, I implemented a user reputation bar that changed color at different levels (0 - 100, 100 - 500, etc.).
            </p>
            <p className={styles.p}>
                Gradually the website traffic grew, in the best months the daily number of visitors was about 2000. At that time, my monthly advertising income was about $100 (in 2011).
                Unfortunately, I got too carried away with adding ads, and after a while the search engines started removing the website pages from the search results.
            </p>
        </div>
    )
};