import Head from 'next/head';
import React, { useRef, useState } from 'react';
import HomeComponent from '../components/HomeComponent';

function Home() {
  const storiesRef = useRef();
  const [prev1, setPrev1] = useState(false);
  const [next1, setNext1] = useState(false);
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instagram" />
        <link rel="icon" href="/ing.webp" />
      </Head>
      <HomeComponent {...{ storiesRef, prev1, next1, setPrev1, setNext1 }} />
    </div>
  );
}

export default Home;
