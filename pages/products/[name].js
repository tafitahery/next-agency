import styles from '../../styles/Product.module.css';
import { data } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

export default function Product({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {product.images.map((item) => (
          <div key={item.id} className={styles.imgContainer}>
            <Image src={item.url} style={{ objectFit: 'cover' }} fill alt="" />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.desc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
  const name = ctx.params.name;
  const product = data.find((item) => item.name === name);
  return {
    props: { product },
  };
};
