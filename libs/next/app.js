import Link from 'next/link'
import { ThemeProvider } from 'styled-components';
import withReduxUsingStore from '@noths/redux/with-redux-using-store';
import store from '@noths/redux/store';
import Layout from './layout';
import theme from './theme';

//const withRedux = withReduxUsingStore(store);

function MyApp({ Component, pageProps }) {
    //const ComponentWithRedux = withRedux(Component);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
