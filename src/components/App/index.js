import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Img from '../Img';
import Footer from '../Footer';
import Profile from './cha-profile.jpg';
import Banner from './banner.jpg';
import BannerUpDown from './bannerUpDown.png';
import A from '../A';
import Button from '../Button';

import styles from './styles.css';



const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  const divImage = {
    backgroundImage: `url('${Banner}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  const divUpDownImage = {
    backgroundImage: `url('${BannerUpDown}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  function currentPath() {
    return routes[1].path;
  }
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Interactive
              as={Link}
              {...s.link}
              to={nextPath(route)}
            >{route.mapMenuTitle}</Interactive>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  return (
    <div className={styles.container}>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Chavis Clark"
        meta={[
          { name: 'description', content: 'About Chavis Clark ' },
        ]}
      />
      <div style={divImage} className={styles.logoWrapper}>
        <div className={styles.banner}>
          <A href="/"><Img src={Profile} className={styles.logo} alt="chae profile photo" /></A>
          <div className={`${styles.logoText} ${styles.highlight}`}>
            <span className={styles.h}>Remote Fullstack Web Developer</span>
            <span className={styles.h}>Digital Creator of Things</span>
            <span className={styles.h}>Lifelong Learner</span>
          </div>
        </div>
        <div className={styles.contact}>
          <figure className={styles.circle}>
            <A target="_blank" href="https://www.linkedin.com/in/1chac">
              <i className={`${styles.icon} fa fa-linkedin fa-2x`}></i>
            </A>
          </figure>
          <figure className={styles.circle}>
            <A target="_blank" href="https://twitter.com/cha_skyes">
              <i className={`${styles.icon} fa fa-twitter fa-2x`}></i>
            </A>
          </figure>
          <figure className={styles.circle}>
            <A target="_blank" href="https://github.com/chavisclark">
              <i className={`${styles.icon} fa fa-github fa-2x`}></i>
            </A>
          </figure>
          <figure className={styles.circle}>
            <A target="_blank" href="mailto:chavis.clark@gmail.com">
              <i className={`${styles.icon} fa fa-envelope fa-2x`}></i>
            </A>
          </figure>
        </div>
      </div>
      <div style={divUpDownImage} className={styles.motto}>
        <section className={`${styles.textSection} ${styles.centered}`}>
          <p className={styles.body}>Solving problems works best <br />when you're standing on your head...</p>
        </section>
      </div>
      <nav className={styles.navBar}>
        <Button className={currentPath() == '' ? 'active' : ''} location='/'>Home</Button>
        <Button className={currentPath() == 'cv' ? 'active' : ''} location='/cv'>Resume/CV</Button>
        <Button className={currentPath() == 'story' ? 'active' : ''} location='/story'>Read My Story</Button>
        <Button className={currentPath() == 'github-pages' ? 'active' : ''} location='/github-pages'>Github Projects</Button>
      </nav>
      <div className={currentPath() == 'github-pages' ? '' : styles.wrapper}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = propTypes;

export default App;
