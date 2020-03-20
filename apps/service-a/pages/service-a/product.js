import { useSelector } from 'react-redux';

const Product = () => {
    const counter = useSelector(state => state.counterReducer.counter);

    return (
        <>
            <h2>Product</h2>
            <p>Counter{counter}</p>
        </>
    );
}

export default Product
