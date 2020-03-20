import { Header, Footer } from '@noths/shared-components';
import * as counterActions from '@noths/redux/store/actions/counterActions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);
    const incrementCounter = () => dispatch(counterActions.increment());

    return (
        <>
            <Header />
            <Title>Service B</Title>

            <p>Counter:{counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <Footer />
        </>
    );

}

export default Home
