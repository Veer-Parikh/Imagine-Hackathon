import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette:{
        white:{
            main: '#ffffff'
        },
        black:{
            main:'#170e23' 
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