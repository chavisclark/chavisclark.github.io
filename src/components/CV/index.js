import React from 'react';
import Button from '../Button';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styles from './styles.css';

function CV() {
   return (
      <article>
        <Helmet
          title="Chavis Clark | Digital Nomad"
          meta={[
            { name: 'description', content: 'Chavis Clark is a self-taught Web Application Developer who works creatively and passionately. View Chavis Clark\'s comprehensive work history and GitHub projects here.' },
          ]}
        />
        <div className={`${styles.centered} ${styles.intro}`}>
          <div className={styles.inline}>
          <Button location='/'>Home</Button>
          <Button location='/story'>Read My Story</Button>
          <Button location='/github-pages'>Github Projects</Button>
          </div>
        </div>
        <div className={`${styles.textSection}`}>
        SKILLS
        </div>
        <div className={styles.skills}>
          <li className={styles.skill}>
          Node.js
          </li>
          <li className={styles.skill}>
          Express.js
          </li>
          <li className={styles.skill}>
          Passport.js
          </li>
          <li className={styles.skill}>
          Webpack
          </li>
          <li className={styles.skill}>
          Nginx
          </li>
          <li className={styles.skill}>
          PHP
          </li>
          <li className={styles.skill}>
          Angular.js
          </li>
          <li className={styles.skill}>
          React.js
          </li>
          <li className={styles.skill}>
          WordPress
          </li>
          <li className={styles.skill}>
          HTML5
          </li>
          <li className={styles.skill}>
          CSS3
          </li>
          <li className={styles.skill}>
          CSS Modules
          </li>
          <li className={styles.skill}>
          MongoDB
          </li>
          <li className={styles.skill}>
          MySQL
          </li>
          <li className={styles.skill}>
          Jade
          </li>
          <li className={styles.skill}>
          EJS
          </li>
          <li className={styles.skill}>
          Git
          </li>
          <li className={styles.skill}>
          Ubuntu
          </li>
          <li className={styles.skill}>
          Linux
          </li>
          <li className={styles.skill}>
          oAuth
          </li>
          <li className={styles.skill}>
          PubNub
          </li>
          <li className={styles.skill}>
          Adobe Creative Suite
          </li>
          <li className={styles.skill}>
          Multilingual
          </li>
        </div>
        <div className={`${styles.textSection}`}>
        RELEVANT EXPERIENCE
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
          Jun. 2017 &mdash;  Present
          </section>
          <section className={styles.job}>
            Developer
            <span className={styles.employer}>
              <span><a target="_blank" href="//mangrove-web.com">Mangrove Web Development (Remote)</a></span>
            </span>
            <p className={styles.tasks}>
              Work as part of an international team of designers, developers, and project managers to create and maintain custom websites
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
          Dec. 2016 &mdash;  Present
          </section>
          <section className={styles.job}>
            Code Mentor
            <span className={styles.employer}>
              <a target="_blank" href="//thinkful.com">Thinkful (Remote)</a>
            </span>
            <p className={styles.tasks}>
              Teach and explain computer programming concepts to aspiring web developers 
            </p>
            <p className={styles.tasks}>
              Lead paired-programming sessions 
            </p>
            <p className={styles.tasks}>
              Ensure student-readiness for mock interviews
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
          Feb. 2017 &mdash;  Nov. 2017
          </section>
          <section className={styles.job}>
            Web Developer
            <span className={styles.employer}>
              <span><a target="_blank" href="//sustainablebolivia.org">Sustainable Bolivia (Cochabamba, Bolivia)</a></span>
              <span><a target="_blank" href="//pisatahua.org">Pisatahua (Riberalta, Bolivia)</a></span>
              <span><a target="_blank" href="//amazonia.org.bo">Fundacion Amazonia (Riberalta, Bolivia)</a></span>
            </span>
            <p className={styles.tasks}>
              Redesign and rebuild Suatainable Bolivia multilingual WordPress website.
            </p>
            <p className={styles.tasks}>
              Create new pages, setup multilingual capabilities, and build new image gallery (backend and UI) for Pisatahua WordPress website.
            </p>
            <p className={styles.tasks}>
              Develop homepage from mockup and setup multilingual capabilities for Fundacion Amazonia WordPress website.
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
          Jul. 2015 &mdash;  Jun. 2017
          </section>
          <section className={styles.job}>
            Freelance Developer
            <span className={styles.employer}>
              Independent (Remote)
            </span>
            <p className={styles.tasks}>
              Improve website performance by reducing expensive JavaScript operations and restructuring CSS modules
            </p>
            <p className={styles.tasks}>
              Increase user-engagement by designing real-time chat features using PubNub
            </p>
            <p className={styles.tasks}>
              Convert user-facing elements developed by UI designers to React.js components
            </p>
            <p className={styles.tasks}>
              Integrate front-end frameworks (Angular.js and React.js) with Node.js server
            </p>
            <p className={styles.tasks}>
              Structure MongoDB databases and replica sets, while using Mongoose to efficiently manipulate data
            </p>
            <p className={styles.tasks}>
              Securely deploy web applications using DigitalOcean configured with AWS S3 as main storage unit
            </p>
            <p className={styles.tasks}>
              Configure and establish private communication between multiple VPM Ubuntu servers
            </p>
            <p className={styles.tasks}>
              Configure Ngnix as reverse-proxy protocol for web applications
            </p>
            <p className={styles.tasks}>
              Implement firewall policies for dedicated servers using iptables
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Sept. 2014 &mdash; Jul. 2015
          </section>
          <section className={styles.job}>
              Technology Tutor & Student Support
            <span className={styles.employer}>
              <a target="_blank" href="//movingforwardeducation.com">Moving Forward Education (San Francisco, CA)</a>
            </span>
            <p className={styles.tasks}>
              Teach computer skills to youth in alternative schools, resulting in professional presentations for senior projects
            </p>
            <p className={styles.tasks}>
              Instruct extra-curricular graphics design and music production classes
            </p>
            <p className={styles.tasks}>
              Build relationships with students, which allowed for accelerated student success
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Sept. 2012 &mdash; Sept. 2014
          </section>
          <section className={styles.job}>
              Webmaster
            <span className={styles.employer}>
              <a target="_blank" href="//atlantapublicschools.us">Atlanta Public School System | Communities in School | West End Academy PLC (Atlanta, GA)</a>
            </span>
            <p className={styles.tasks}>
              Establish standard processes including workflow, approvals, and publishing
            </p>
            <p className={styles.tasks}>
              Create new and update existing Web pages as necessary
            </p>
            <p className={styles.tasks}>
              Assist staff in the creation of Web pages and the proper uploading of files and links to Web pages
            </p>
            <p className={styles.tasks}>
              Create, maintain and distribute online publications such as newsletters, guides and email blasts
            </p>
            <p className={styles.tasks}>
              Make day-to-day updates as needed for public websites as well as projects which support advertising campaigns, new technologies and social media channels
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Jun. 2012 &mdash; Apr. 2013
          </section>
          <section className={styles.job}>
              Media and Web Developer
            <span className={styles.employer}>
              <a target="_blank" href="//playpromedia.com">Playpro Media (Kennesaw, GA)</a>
            </span>
            <p className={styles.tasks}>
              Maintain WordPress CMS and develop new custom JavaScript elements for front-end
            </p>
            <p className={styles.tasks}>
              Design vector images and maintain website graphical user interface (GUI)
            </p>
            <p className={styles.tasks}>
              Provide web editing and marketing support for public events
            </p>
            <p className={styles.tasks}>
              Moderate weekly staff meetings and report task deliverables to upper management
            </p>
            <p className={styles.tasks}>
              Form relationships with new clientele to promote the company
            </p>
            <p className={styles.tasks}>
              Conduct market research through social media to effectively increase website user base (i.e. music artists, college students)
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Feb. 2012 &mdash; Sept. 2012
          </section>
          <section className={styles.job}>
              Full Stack Web Developer
            <span className={styles.employer}>
              Media in the Metro (Atlanta, GA)
            </span>
            <p className={styles.tasks}>
              Develop online social community showcasing over 100 youth media portfolios
            </p>
            <p className={styles.tasks}>
              Utilize Twitter Bootstrap and custom CSS styling for UI design
            </p>
            <p className={styles.tasks}>
              Design MySQL data architecture with specific user privileges on Apache server and manipulate database with PHP
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Jul. 2011 &mdash; Jun. 2012
          </section>
          <section className={styles.job}>
              Media Intern
            <span className={styles.employer}>
              <a target="_blank" href="//playpromedia.com">Playpro Media (Kennesaw, GA)</a>
            </span>
            <p className={styles.tasks}>
              Recruit music artists to sign-up to participate in artist showcase
            </p>
            <p className={styles.tasks}>
              Film and edit videos for national music artists such as Blackberry Smoke
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
          Mar. 2011 &mdash; Aug. 2012
          </section>
          <section className={styles.job}>
            Assistant Webmaster
            <span className={styles.employer}>
              <a target="_blank" href="//hss.kennesaw.edu/.com">CHSS | Kennesaw State University (Kennesaw, GA)</a>
            </span>
            <p className={styles.tasks}>
              Provide customer service to all levels of users and encourage timeliness and accuracy of Web page information and resolution of problems
            </p>
            <p className={styles.tasks}>
              Responsible for the day-to-day maintenance, and operation and improvement of the official KSU College of Humanities and Social Sciences websites
            </p>
            <p className={styles.tasks}>
              Assure that all Web pages comply with appropriate policies, guidelines and standards
            </p>
            <p className={styles.tasks}>
              Organize and train faculty in website maintenance protocol
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Jul. 2010 &mdash; Mar. 2011
          </section>
          <section className={styles.job}>
              Co-Founder
            <span className={styles.employer}>
              HeyJBH (Atlanta, GA)
            </span>
            <p className={styles.tasks}>
              Build a messaging platform integrated with Twitter's API allowing for anonymous messaging
            </p>
            <p className={styles.tasks}>
              Handle hiring and job placements for small team of web developers
            </p>
          </section>
        </div>
        <div className={`${styles.textSection}`}>
          OTHER EXPERIENCE
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Jul. 2014 &mdash;  Present
          </section>
          <section className={styles.job}>
              Freelance Audio Engineer (Part-time)
            <span className={styles.employer}>
              Independent (Remote)
            </span>
            <p className={styles.tasks}>
              Work with independent music artists and producers on the technical aspects of music production
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            Jul. 2009 &mdash;  Sept. 2014
          </section>
          <section className={styles.job}>
            Digital Media Producer
            <span className={styles.employer}>Reelhouse Productions (Atlanta, GA)
            </span>
            <p className={styles.tasks}>Produce music videos, promotional videos, and company profiles for clients:
              <span className={styles.inset}>Projects completed for Kia Vans Warped Tour, KSU Peace Project,
    Kids & Pros, Relay for Life, L.E.A.D. Baseball, WNBA's Keisha Brown: Bank$hot camp, and Ignition, Inc.
              </span>
            </p>
          </section>
        </div>
        <div className={styles.resume}>
          <section className={styles.timeLine}>
            May 2009 &mdash; Sept. 2009
          </section>
          <section className={styles.job}>
            Radio Intern
            <span className={styles.employer}>
            COX Radio (Atlanta, GA)
            </span>
            <p className={styles.tasks}>Record radio shoutouts from music artists (Justin Bieber, Usher)
            </p>
            <p className={styles.tasks}>Produce weather reports for on-air disc-jockey
            </p>
          </section>
        </div>
      </article>
    );
}

export default CV;
