import { createTheme } from '@mui/material/styles';

const Theme1 = createTheme({
    palette:{
        white:{
            main: '#ffffff'
        },
        black:{
            main:'#170e23' 
        },
        dark:{
            main:'#0d0c0c'
        }
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

export default Theme1;