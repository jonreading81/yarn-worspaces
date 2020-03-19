import { useEffect } from 'react';
import { Header, Footer } from '@noths/shared-components';
import apiClient from '@noths/api-client';
import styled from 'styled-components'
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {
  useEffect(() => {
    apiClient('hello');
  }, [])

  return (
    <>
      <Header />
      <Title>Service A</Title>
      <Link href="/service-a/product">
        <a>Product</a>
      </Link>
      <Footer />
    </>
  );

}

export default Home
