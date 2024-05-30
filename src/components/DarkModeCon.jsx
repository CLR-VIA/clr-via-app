import React, {createContext, useState, useEffect } from 'react';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a context to hold the dark mode state and toggle function
const DarkModeContext = createContext();

// Create a component that will wrap the app / provide dark mode context
const DarkModeProvider = ({children}) => {
    // State to manage dark mode
    const [darkMode, setDarkMode] = useState(false);

    // useEffect hook to load the saved dark mode preference
    // will be stored in localStorage when component mounts
    useEffect(() => {
        // Retrieve saved mode
        const savedMode = localStorage.getItem("darkMode") === "true";
        // Set darkMode state based on saved preference
        setDarkMode(savedMode);
    }, []);

    // Function for toggling dark mode/save preference in localStorage
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            // Save the new mode
            localStorage.setItem("darkMode", !prevMode);
            // Return the new mode to update state
            return !prevMode;
        });
    }
    
    //Create Material-UI theme object based on current darkMode state
    const theme = createTheme({
        palette: {
            // Set palette mode to dark or light
            mode: darkMode ? "dark" : "light",
        },
    });

    // Return the context provider, wrap children with ThemeProvider
    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <ThemeProvider theme={theme}>
                {/* Apply global baseline styles */}
                <CssBaseline />
                {/* Render the children components passed to this provider */}
                {children}
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
};

// Export the context/provider for use in other components
export {DarkModeProvider, DarkModeContext}