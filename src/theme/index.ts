import { createTheme } from '@mui/material/styles'

const themeConfig = {
    palette: {
        primary: {
            light: '#E64F90',
            main: '#DE0073',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        caption: { color: '#8E8E8E' },
    },
}

export default createTheme(themeConfig)
