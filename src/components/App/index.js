import React, { PropTypes, Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    }
  }
  handleOnClick() {
    const nav = document.getElementsByTagName('nav')[0];
    const trigger = document.getElementsByTagName('dd')[0];
    if (!this.state.mobileOpen) {
      this.setState({mobileOpen: true})
      nav.style.display = 'flex';
      trigger.innerHTML = '<i class="fa fa-2x fa-close"></i>';
    } else {
      this.setState({mobileOpen: false})
      nav.style.display = 'none';
      trigger.innerHTML = '<i class="fa fa-2x fa-bars"></i>';
    }
    
    
  }
  currentPath() {
    return routes[1].path;
  }
  generateMapMenu() {
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
  render() {
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
            <A target="_blank" href="https://www.linkedin.com/in/1chac">
              <figure className={styles.circle}>    
                <i className={`${styles.icon} fa fa-linkedin fa-2x`}></i>
              </figure>
            </A>
            <A target="_blank" href="https://twitter.com/cha_skyes">
              <figure className={styles.circle}>
                <i className={`${styles.icon} fa fa-twitter fa-2x`}></i>
              </figure>
            </A>
            <A target="_blank" href="https://github.com/chavisclark">
              <figure className={styles.circle}>
                <i className={`${styles.icon} fa fa-github fa-2x`}></i>
              </figure>
            </A>
            <A target="_blank" href="mailto:chavis.clark@gmail.com">
              <figure className={styles.circle}>
                <i className={`${styles.icon} fa fa-envelope fa-2x`}></i>
              </figure>
            </A>
          </div>
        </div>
        <div style={divUpDownImage} className={styles.motto}>
          <section className={`${styles.textSection} ${styles.centered}`}>
            <p className={styles.body}>Solving problems works best <br />when you're standing on your head...</p>
          </section>
        </div>
        <dd onClick={this.handleOnClick.bind(this)} className={styles.mobileTrigger}><i className="fa fa-bars fa-2x"></i></dd>
        <nav className={styles.navBar}>
          <Button className={this.currentPath.bind(this) == '' ? 'active' : ''} location='/'>Home</Button>
          <Button className={this.currentPath.bind(this) == 'cv' ? 'active' : ''} location='/cv'>Resume/CV</Button>
          <Button className={this.currentPath.bind(this) == 'story' ? 'active' : ''} location='/story'>Read My Story</Button>
          <Button className={this.currentPath.bind(this) == 'github-pages' ? 'active' : ''} location='/github-pages'>Github Projects</Button>
        </nav>
        <div className={this.currentPath.bind(this) == 'github-pages' ? '' : styles.wrapper}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );    
  }
}

App.propTypes = propTypes;

export default App;
