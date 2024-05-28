import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Link } from '@mui/material';
import logo from '../assets/clr-via.webp';

function HomeButton(props) {
    return (
        <IconButton size='large'>
            <Link to="/" component={RouterLink}>
                <img src={logo} alt="Logo" style={{height: '50px', justifyContent: 'center'}}/>
            </Link>
        </IconButton>
    );
}

export default HomeButton;