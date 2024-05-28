import React from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function CopyrightFooter(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="/" color="inherit" component={RouterLink}>
                CLR VIA
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default CopyrightFooter;