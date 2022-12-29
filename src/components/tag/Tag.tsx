import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';

interface TagProps extends PropsWithChildren {
    color: string
}

export default (props: TagProps) => {
    return (
        <span className={styles.tag} style={{ 'backgroundColor': props.color }}>
            {props.children}
        </span >
    )
}