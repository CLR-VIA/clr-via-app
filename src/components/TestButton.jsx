import React from "react";
import { Button } from "@mui/material";

export default function TestButton(props) {
    return (
        <Button  variant="contained" onClick={props.onClick}>
            {props.children}
            </Button>
    );
}