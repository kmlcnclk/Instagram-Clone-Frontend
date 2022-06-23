import React, { useRef, useState } from 'react';
import StoriesComponent from '../../../components/StoriesComponent';
import Head from 'next/head';

function Id({ id, name }) {
  return (
    <div>
      <Head>
        <title>Stories &bull; Instagram</title>
        <meta name="description" content="Instagram" />
        <link rel="icon" href="/ing.webp" />
      </Head>
      <StoriesComponent />
    </div>
  );
}

export default Id;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1', name: 'solar' } },
      { params: { id: '2', name: 'solar' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
      name: params.name,
      revalidate: 60,
    },
  };
}
