import React from "react";
import { Button } from "@mui/material";
import styles from "./TestButton.module.css";

export default function TestButton(props) {
    return (
        <Button className={styles.redButton} variant="contained" onClick={props.onClick}>
            {props.children}
            </Button>
    );
}