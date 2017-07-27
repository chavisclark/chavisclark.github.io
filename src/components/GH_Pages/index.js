import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import Button from '../Button';
import H1 from '../H1';
import H3 from '../H3';
import A from '../A';
import Hat from './hat.svg';
import classNames from 'classnames/bind';
import styles from './styles.css';
const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.element,
};

function GH_Pages({ children }) {
    const divImage = {
      backgroundImage: `url('${Hat}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
    return (
    <div className={cx("container")}>
          <div className={cx("inline", "text-center")}>
             <Button location='/story'>Read My Story</Button><Button location='/'>CV/Resume</Button>
          </div>
        <div className={cx("text-center", "space-around")}>
          <H1>GitHub Projects</H1>
        </div>
        <div className={cx("intro")}>
            <div className={cx("col-md-6", "portfolio-item")}>
                <a href="/superfan/">
                    <img className={cx("img-responsive")} src="https://d3brgjqtir64ox.cloudfront.net/HomePage.png" alt="" />
                </a>
                <h3>
                    <a href="/superfan/">Superfan</a>
                </h3>
                <p>A web app using React, Redux, LocalStorage, Axios</p>
                <p><a href="/superfan">Source code</a></p>
            </div>
            <div className={cx("col-md-6", "portfolio-item")}>
                <a href="/travel-site">
                    <img className={cx("img-responsive")} src="https://d3brgjqtir64ox.cloudfront.net/travel_landing.png" alt=""/>
                </a>
                <h3>
                    <a href="/travel-site/">Travel Site</a>
                </h3>
                <p>A static site with URL routing and no server. Created within the ReactJS ecosystem.</p>
                <p><a href="/travel-site">Source code</a></p>
            </div>
        </div>
        <div className={cx("intro")}>
            <div className={cx("col-md-6", "portfolio-item")}>
                <a href="/jquery-sandbox/">
                    <img className={cx("img-responsive")} src="https://d3brgjqtir64ox.cloudfront.net/jq-sandbox.png" alt=""/>
                </a>
                <h3>
                    <a href="/jquery-sandbox/">JQ Sandbox</a>
                </h3>
                <p>A simple re-creation of <a href="http://jsbin.com" target="_blank">JSbin</a> using JQuery</p>
                <p><a href="/jquery-sandbox">Source code</a></p>
            </div>
            <div className={cx("col-md-6", "portfolio-item")}>
                <a href="/react_components/">
                    <img className={cx("img-responsive")} src="https://d3brgjqtir64ox.cloudfront.net/react-c-gallery.png" alt=""/>
                </a>
                <h3>
                    <a href="/react_components/">React Components</a>
                </h3>
                <p>A collection of custom react components.</p>
                <p><a href="/react_components">Source code</a></p>
            </div>
        </div>
    </div>
    );
}

GH_Pages.propTypes = propTypes;

export default GH_Pages;
