import { useEffect } from 'react';
import { Header, Footer } from '@noths/shared-components';
import apiClient from '@noths/api-client';

const Home = () => {
  useEffect(() => {
    apiClient('hello');
  }, [])
  return (
    <>
      <Header />
      <h1>Hello</h1>
      <Footer />
    </>
  );

}

export default Home
