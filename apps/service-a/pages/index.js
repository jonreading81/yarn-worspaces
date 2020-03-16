import {useEffect} from 'react';
import Head from 'next/head'
import apiClient from '@noths/api-client';

const Home = () => {
  useEffect(()=>{
    apiClient('hellso');
  },[])
return <h1>Hello</h1>
}

export default Home
