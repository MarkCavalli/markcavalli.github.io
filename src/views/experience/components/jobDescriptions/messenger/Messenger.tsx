import React from "react";
import styles from '../styles.module.css';

export default () => {
    return (
        <div className={styles.main}>
            <p className={styles.p}>
                I think everyone thinks about Internet security. Can we trust corporations? Do they have access to our correspondence? We are assured that end-to-end encryption
                is secure enough that only the authors have access to the data. Yes, maybe they keep data encrypted, but where is the guarantee that they don't store access keys as well?
            </p>
            <p className={styles.p}>
                And what if you start managing encryption yourself? - I thought. So I decided to create my own "protected" messenger. The server was on nodejs with typescript and mysql,
                the client was written on the cordova framework - this was a web page inside phone native webview.
            </p>
            <p className={styles.p}>
                The key idea of the application is to enable the user to manage the encryption of messages. By default, all messages were transmitted in decrypted form.
                To start encrypting them, it was necessary to set 2 encryption keys for each user: to decrypt the incoming messages and to encrypt the messages sent.
                The main inconvenience was the need to somehow get and send these keys. The ideal way of transmission was a personal meeting.
                In any case, the risk of key disclosure now depended entirely on the user's responsibility.
            </p>
            <p className={styles.p}>
                For a while, my friends and I used messenger, but the main problem was in webview - not on all phones supported W3C standards.
                Bugs appeared in the most unexpected places. The only way out was to write applications with 0 for android and ios, for which I had no knowledge and
                no resources.
            </p>
        </div>
    )
};