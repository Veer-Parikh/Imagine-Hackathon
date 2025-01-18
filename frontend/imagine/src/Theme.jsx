import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette:{
        white:{
            main: '#00B69B'
        },
        black:{
            main:'#ffc700' 
        },
    },

    typography: {
        fontFamily: [
            'Poppins',
            'Roboto',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        mono: "Menlo, monospace",
    },
});

export default lightTheme;