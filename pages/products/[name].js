import styles from '../../styles/Product.module.css';
import { data } from '../../data';

export default function Product() {
  return <div className={styles.container}>Product</div>;
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
