import { ThemeProvider } from '@mui/material'
import React from 'react'

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