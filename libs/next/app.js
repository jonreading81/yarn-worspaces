import App from 'next/app';
import Link from 'next/link'
import { ThemeProvider } from 'styled-components';
import withReduxUsingStore from '@noths/redux/with-redux-using-store';
import initializeStore from '@noths/redux/store';

const theme = {
    colors: {
        primary: 'blue',
    },
};

const withRedux = withReduxUsingStore(initializeStore);
const WrappedComponent = ({ children }) => <>{children}</>;
const ComponentWrappedWithRedux = withRedux(WrappedComponent);

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
                <ComponentWrappedWithRedux>
                    <Component {...pageProps} />
                </ComponentWrappedWithRedux>
            </ThemeProvider>
        </>
    )
}
export default MyApp;
