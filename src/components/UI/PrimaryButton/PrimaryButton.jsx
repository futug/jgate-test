import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = (props) => {
    return (
        <button type="button" onClick={props.onClick} className={`button-reset ${styles.button}`}>
            {props.children}
        </button>
    );
};

export default PrimaryButton;
