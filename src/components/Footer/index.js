import React from 'react';

import styles from './styles.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <p>Built with React</p>
      </section>
      <section className={styles.footerContent}>
        <p>Made with 💚 </p>
      </section>
      <section className={styles.footerContent}>
        <p>Current Location:  Medellín, Colombia 🇨🇴</p>
      </section>
    </footer>
  );
}

export default Footer;
