import styles from '../styles/Intro.module.css';
import Circle from './Circle';

import Image from 'next/image';

export default function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviours.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image src="/img/Avocado.png" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
}
