import { useEffect } from 'react';
import { Header } from '@noths/shared-components';
import apiClient from '@noths/api-client';

const Home = () => {
  useEffect(() => {
    apiClient('hellso');
  }, [])
  return (
    <>
      <Header />
      <h1>Hello</h1>
    </>
  );

}

export default Home
