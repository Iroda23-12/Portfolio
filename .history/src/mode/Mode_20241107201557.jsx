import React from 'react'

const Mode = () => {
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