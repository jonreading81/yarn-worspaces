import App from 'next/app';
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: 'blue',
    },
};

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/service-a">
                    <a>Service A</a>
                </Link>
            </li>
            <li>
                <Link href="/service-b">
                    <a>Service B</a>
                </Link>
            </li>
        </ul>

    </nav>
);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <h1>App</h1>
            <Nav />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
export default MyApp;
