/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

function Button(props) {
  const className = props.className ? props.className : styles.button;

  // Render an anchor tag
  let button = (
    <a className={className} href={props.href} onClick={props.onClick}>{props.children}</a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.location) {
    button = (
      <Link className={className} to={props.location}>{props.children}</Link>
    );
  }

  return (
    <div className={styles.buttonWrapper}>
      {button}
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
