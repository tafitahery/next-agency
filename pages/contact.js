import Circle from '../components/Circle';
import styles from '../styles/Contact.module.css';

export default function contact() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="Username" />
        <input className={styles.inputS} placeholder="Phone" />
        <input className={styles.inputL} placeholder="Email" />
        <input className={styles.inputL} placeholder="Object" />
        <textarea className={styles.textarea} placeholder="Message" rows={6} />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
}
