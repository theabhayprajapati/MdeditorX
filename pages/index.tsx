import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Homepage from '../Homepage';

const Type = () => {
  return <div className="font-syne">
    <Head>
      <title>
        Markdown Editor X
      </title>
    </Head>
    <main>
      <Homepage />
    </main>
  </div>;
};

export default Type;
