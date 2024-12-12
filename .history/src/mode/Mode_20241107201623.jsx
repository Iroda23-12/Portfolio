import { ThemeProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Mode = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <main>This app is using the dark mode</main>
            </ThemeProvider>
        </>
    )
}

export default Mode