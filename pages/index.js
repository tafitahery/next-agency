import Head from 'next/head';
import Intro from '../components/Intro';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lama Dev</title>
        <meta name="description" content="The best YT Channel" />
      </Head>
      <Intro />
    </div>
  );
}
