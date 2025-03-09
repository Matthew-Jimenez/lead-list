'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: 'var(--font-montserrat)',
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 300,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
    },

}));

export default theme;
