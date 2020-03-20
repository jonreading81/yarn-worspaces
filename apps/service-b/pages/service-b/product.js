import { useSelector } from 'react-redux';
import componentWithRedux from '../../lib/component-with-redux';

const Product = () => {
    const counter = useSelector(state => state.counterReducer.counter);

    return (
        <>
            <h2>Product</h2>
            <p>Counter{counter}</p>
        </>
    );
}

export default componentWithRedux(Product);
