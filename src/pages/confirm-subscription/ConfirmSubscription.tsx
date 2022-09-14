import React from "react";
import styles from "./ConfirmSubscription.module.sass";

class ConfirmSubscription extends React.Component {
    render() {
        return <div className={styles.confirmSubscription}>
            <h1>Thank you!</h1>
            <p>Thanks for signing up to hear more from us.</p>
            <p>We'll keep you up to date with everything new about EOFIS.</p>
        </div>
    }
};

export default ConfirmSubscription;