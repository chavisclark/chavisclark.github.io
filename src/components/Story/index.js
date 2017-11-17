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

function Story({ children }) {
    const divImage = {
      backgroundImage: `url('${Hat}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
    return (
      <div>
        <Helmet
          title="Chavis Clark | My Story"
          meta={[
            { name: 'description', content: 'Chavis Clark\'s Story' },
          ]}
        />
          <div className={cx("inline", "text-center")}>
        <Button location='/'>Return to Resume/CV</Button>
        <Button location='/github-pages'>Github Projects</Button>
          </div>
        <div className={cx("text-center", "space-around")}>
          <H1>My Story</H1>
        </div>
        <H3>I was introduced to coding at age 12... Today, I still give 110% no matter which hat I'm wearing.</H3>
        <div className={styles.intro}>
          <div className={styles.hat} style={divImage}>
            &nbsp;
          </div>
          <p>
            Over the years I've held many roles within different companies and organizations. Whether I'm working with a major company or an incubated startup, I pride myself on getting the job done, and doing it well. My professional career in the digital realm started in the entertainment industry as a Media Producer, and because of my web skills, I quickly transitioned into additional roles of Webmaster and Web Developer.
          </p>
        </div>
        <div className={styles.intro}>
        <p>
          Even while producing videos for companies like Kia Motors and working with numerous music artists, I still made time to develop web components for different companies and small businesses.
        </p>
        <p>
        <strong>As a developer I value growth, teamwork, and having fun!</strong> My goals are to stay on top of cutting-edge web technologies, teach less experienced developers best-practices, and become a part of a development team that truly fits. I've found that my talents are best utilized in an environment where I can become an active contributor and continue my professional growth.
        </p>
        </div>
        <p className={styles.headline}><b>Throughout my professional career I've been able to:</b></p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p>Develop an entire social web application for a local non-profit startup called Media in the Metro, which reached over 100 inner-city youth</p>
          </li>
          <li className={styles.listItem}>
            <p>Contribute to the launch of a media marketing company, <A href="https://playpromedia.com">Playpro Media</A>, which has now expanded to several different markets with direct access to 38,000 college students</p>
          </li>
          <li className={styles.listItem}>
            <p>Design the UI for West End Academy, which reflected the principal's vision for it being "The Center of Hope" within the <A href="http://www.atlanta.k12.ga.us/">Atlanta Public School System</A></p>
          </li>
          <li className={styles.listItem}>
            <p>Configure e-commerce application for <A href="http://www.mailwithabc.com/">Atlanta Business Circulators</A>, a local Atlanta mailing and printing company which services over 300 customers per year</p>
          </li>
          <li className={styles.listItem}>
            <p>Partner with <A href="https://ignition-inc.com">Ignition-Inc</A>, to generate targeted marketing content for Kia Motors during the Vans Warped Tour</p>
          </li>
          <li className={styles.listItem}>
            <p>Develop a client management web application for my music-related freelance work</p>
          </li>
          <li className={styles.listItem}>
            <p>Utilize AWS for customers to efficiently eliminate upfront costs and guesswork around capacity</p>
          </li>
        </ul>
      </div>
    );
}

Story.propTypes = propTypes;

export default Story;
