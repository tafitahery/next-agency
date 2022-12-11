import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do?</h1>
      <h1 className={styles.subtitle}>Servises we can help you with.</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    alt=""
                    width="500"
                    height="500"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
