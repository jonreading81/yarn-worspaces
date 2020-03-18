import App from 'next/app';
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: 'blue',
    },
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <h1>App wrapper</h1>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )

}
export default MyApp;
