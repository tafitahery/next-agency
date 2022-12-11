import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import { data } from '../data';

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Lama Dev</title>
        <meta name="description" content="The best YT Channel" />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
