import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                By this time, I had been working on my open source pet project <a href="//github.com/MarkCavalli/rageserver" target="_blank" className={styles.link}>RAGE Server</a> for more than
                a year in my spare time. At one point, a guy wrote to me and offered to join the development of the project from scratch.
                His team was just starting development, so it was a great chance for me to implement all my ideas.
            </p>
            <p className={styles.p}>
                So we started the development. The main goal of the task was time - we need to do it as quickly as possible. It also affected the selected stack - my team leader found a mini-project,
                written in <b>javascript</b> with a database <b>mongodb</b> and decided not to waste time thinking through the architecture,
                although I already had a ready-made <a href="//github.com/MarkCavalli/rage-server-start-template" target="_blank" className={styles.link}>template</a> using <b>typescript</b> and <b>mysql</b>.
                The backend was written on <b>nodejs</b>, as a frontend we used my previous work with <b>vue, vue, vuerouter</b>.
            </p>
            <p className={styles.p}>
                It was a very big step for me as an organization of the process. We worked in <b>jira</b> on <b>scrum</b> 2 week sprints, I learned how to quickly switch between tasks;
                develop, fix conflicts and manage tasks that depended on each other; pass and do code review.
                I figured out how to use sprites with svg-icons, and later made a sprite with .png pictures for our inventory.
                This reduced the number of requests to the server from 200 to 10. I also replaced the <b>'div'</b> tag with <b>'b'</b> (block), as a result of which our <b>vue</b> bundle was reduced by 22%.
            </p>
            <p className={styles.p}>
                But the quality of the code and the tight deadlines depressed me, so after six months of working in this mode, I burned out and decided to leave the project.
            </p>
        </div>
    )
};