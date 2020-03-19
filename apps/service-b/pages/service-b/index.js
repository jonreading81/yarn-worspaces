import { useEffect } from 'react';
import { Header, Footer } from '@noths/shared-components';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {
    return (
        <>
            <Header />
            <Title>Hello service-b</Title>
            <Footer />
        </>
    );

}

export default Home
