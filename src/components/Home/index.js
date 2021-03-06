import React from 'react';
import Button from '../Button';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styles from './styles.css';

function Home() {
   return (
      <article className={styles.padding}>
        <Helmet
          title="Chavis Clark | Digital Nomad & Fullstack Web Developer"
          meta={[
            { name: 'description', content: 'Chavis Clark is a self-taught Web Application Developer who works remotely and passionately. View Chavis Clark\'s comprehensive work history and GitHub projects here.' },
          ]}
        />
        <div className={`${styles.centered} ${styles.intro}`}>
        <h3>I develop performance-oriented websites and web applications.</h3>
        When I'm not practicing Spanish or mentoring less-experienced developers, I'm exploring new places, cultures, and music!
        </div>
      </article>
    );
}

export default Home;
