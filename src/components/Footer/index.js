import React from 'react';

import styles from './styles.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <p>Built with React</p>
      </section>
      <section className={styles.footerContent}>
        <p>Made with 💚  from my basement</p>
      </section>
      <section className={styles.footerContent}>
        <p>Deployed on DigitalOcean</p>
      </section>
    </footer>
  );
}

export default Footer;
