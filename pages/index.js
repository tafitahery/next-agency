import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lama Dev</title>
        <meta name="description" content="The best YT Channel" />
      </Head>
      <h1 className={styles.title}>this is homepage</h1>
    </div>
  );
}
