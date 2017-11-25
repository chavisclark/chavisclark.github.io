import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import CV from './components/CV';
import Story from './components/Story';
import GH_Pages from './components/GH_Pages';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="cv" mapMenuTitle="Story" component={CV}>
    </Route>

    <Route path="story" mapMenuTitle="Story" component={Story}>
    </Route>

    <Route path="github-pages" mapMenuTitle="GH_Pages" component={GH_Pages}>
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
