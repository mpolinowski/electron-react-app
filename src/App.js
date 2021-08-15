import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import AboutPage from './content/AboutPage';
import AppHeader from './components/AppHeader';

import { Content } from 'carbon-components-react';
import './App.scss';

function App() {
  return (
    <>
      <AppHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about/" component={AboutPage} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
