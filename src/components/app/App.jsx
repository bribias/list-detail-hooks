import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetailsContainer from '../../containers/HeyArnoldDetailsContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <HeyArnoldDetailsContainer />
        </Route>
        <Route path="/">
          <HeyArnoldContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
