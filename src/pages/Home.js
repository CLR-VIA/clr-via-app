import React from "react";
import { Button } from "@mui/material";
import NavBar from "../NavBar";
function Home(){
    return (
        <>
        <h1>Home Page</h1>
        <div>
        <Button variant="contained">Button</Button>
        </div>
        <div>
            <NavBar></NavBar>
        </div>
        </>
    );
}

export default Home;