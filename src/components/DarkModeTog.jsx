import React, {useContext} from 'react';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DarkModeContext } from './DarkModeCon';

const DarkModeToggle = () => {
    // Use 'useContext' to access darkMode state/toggleDarkMode function from DarkModeContext
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return(
        // Container for the toggle switch/icons
        <div style={{display: "flex", alignItems: "center", padding: "0 16px" }}>
            {/* Sun icon represents light mode */}
            <Brightness7Icon />
            {/* Switch component, checked state is controlled by darkMode. onChange triggers toggleDarkMode */}
            <Switch checked={darkMode} onChange={toggleDarkMode} />
            {/* Moon icon represents dark mode */}
            <Brightness4Icon />
        </div>
    );
};

// Export the DarkModeToggle component
export default DarkModeToggle;