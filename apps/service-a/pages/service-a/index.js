import { useEffect } from 'react';
import { Header, Footer } from '@noths/shared-components';
import apiClient from '@noths/api-client';
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
  useEffect(() => {
    apiClient('hello');
  }, []);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer.counter);
  const incrementCounter = () => dispatch(counterActions.increment());

  return (
    <>
      <Header />
      <Title>Service A</Title>
      <Link href="service-a/product">
        <a>Product</a>
      </Link>
      <p>Counter:{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <Footer />
    </>
  );

}

export default Home
