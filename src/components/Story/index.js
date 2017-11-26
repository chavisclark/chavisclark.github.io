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
      <div className={styles.paddingTop}>
        <Helmet
          title="Chavis Clark | My Story"
          meta={[
            { name: 'description', content: 'Chavis Clark\'s Story' },
          ]}
        />
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
        After years of working traditionally, I decided to branch out and try living and working remotely. I've worked as a digital nomad and lived as a global citizen ever since.
        </p>
        <p>
        <strong>As a developer I value growth, teamwork, and having fun!</strong> My goals are to stay on top of cutting-edge web technologies, teach less experienced developers best-practices, and become a part of a development team that truly fits. I've found that my talents are best utilized in an environment where I can become an active contributor and continue my professional growth.
        </p>
        </div>
        <div className={styles.paddingTop}></div>
      </div>
    );
}

Story.propTypes = propTypes;

export default Story;
