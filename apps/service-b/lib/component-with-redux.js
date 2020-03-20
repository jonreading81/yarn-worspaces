import withReduxUsingStore from '@noths/redux/with-redux-using-store';
import store from '@noths/redux/store';

const withRedux = withReduxUsingStore(store);

export default withRedux;