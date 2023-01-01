import React from "react";
import styles from '../styles.module.css';
import stylesLocal from './styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                <a href="//www.psbank.ru/" target="_blank" className={styles.link}>Promsvyazbank</a> is one of the 10 largest banks in Russia.
                After 4 years of development on <b>vue</b>, I decided to try something new: <b>React</b> or <b>Angular</b>.
                Here at the bank we use <b>Angular</b> and work via <b>scrum</b> 2 week sprints.
            </p>
            <p className={styles.p}>
                One of the most important qualities of working in a bank is reliability. It is necessary to reduce the number of bugs to 0, so you need to think about your decisions and look ahead.
                I work in the loans team and support existing and develop new loan products.
                We also have a <b>UI Kit</b>, and I create new components in it as needed.
            </p>
            <p className={styles.p}>
                When I first arrived, I found warnings about unused files when compiling the project. I slightly changed the entry points in webpack.config, and also added page hot reloading,
                after which warnings gone, and the size of the bundle has decreased by 5%. This was my first optimization.
            </p>
            <div className={styles.p}>
                In general, <b>Angular</b> is a more complex framework and it is easier to make a mistake in it, because it does not use virtual-dom like <b>vue</b> or <b>react</b>.
                Because of this, I had a funny situation, when the code is written without errors, but there is a bug. Guess what will be equal input.value after component rendering:
                <pre className={stylesLocal.pre}>
                    <code>const value = 900;</code>
                    <code>{'<input type="range" [value]="value" min="0" max="1000" />'}</code>
                </pre>
                Answer: <span className={stylesLocal.answer}>100</span>
            </div>
        </div>
    )
};