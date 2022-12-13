import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40" height="40" alt="" />
          </Link>
        </h1>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          contact@lebo.dev <br /> 12 1234 9887
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}
