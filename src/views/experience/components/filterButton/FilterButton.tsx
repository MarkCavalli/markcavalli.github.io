import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export interface FilterButtonProps extends PropsWithChildren {
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default (props: FilterButtonProps) => {

    return (
        <button className={`${styles.button} ${props.active ? styles.active : ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};
