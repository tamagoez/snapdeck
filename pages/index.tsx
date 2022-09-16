import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SnapDeck</title>
        <meta name="description" content="All snap applications comes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold">Snapdeckに改名した👋</h1>
      <p>Twitterが作った絵文字使ってるけど、なんかずれる🤔</p>
      <p>と思ったけれど直ったわ✨</p>
    </>
  );
};

export default Home;
