import React from "react";
import styles from "./SecondaryButton.module.scss";

const SecondaryButton = (props) => {
    return (
        <button type="button" onClick={props.onClick} className={`button-reset ${styles.button}`}>
            {props.children}
        </button>
    );
};

export default SecondaryButton;
