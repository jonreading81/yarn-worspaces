
import NothsApp from '@noths/next/app';
import withReduxUsingStore from '@noths/redux/with-redux-using-store';
import store from '@noths/redux/store';

const withRedux = withReduxUsingStore(store);

const MyServiceApp = ({ Component, pageProps }) => {
    const ComponentWithRedux = withRedux(Component);
    return <NothsApp Component={ComponentWithRedux} {...pageProps} />;
}

export default MyServiceApp;