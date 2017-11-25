import React from 'react';
import Button from '../Button';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styles from './styles.css';

function Home() {
   return (
      <article>
        <Helmet
          title="Chavis Clark | Digital Nomad"
          meta={[
            { name: 'description', content: 'Chavis Clark is a self-taught Web Application Developer who works creatively and passionately. View Chavis Clark\'s comprehensive work history and GitHub projects here.' },
          ]}
        />
        <div className={`${styles.centered} ${styles.intro}`}>
        <h3>I develop performance-oriented websites and web applications for the web.</h3>
        When I'm not practicing my Spanish or mentoring less-experienced developers, I'm exploring new places, cultures, and music!
          <div className={styles.inline}>
          <Button location='/cv'>Resume/CV</Button>
          <Button location='/story'>Read My Story</Button>
          <Button location='/github-pages'>Github Projects</Button>
          </div>
        </div>


      </article>
    );
}

export default Home;
