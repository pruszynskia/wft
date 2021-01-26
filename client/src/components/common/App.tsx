import React from 'react';

import Header from './Header';
import Footer from './Footer';
import JobOffer from '../JobOffer/JobOfferList';
import JobOfferDetails from '../JobOffer/JobOfferDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/job-offers-list" exact component={JobOffer} />
          <Route path="/:job-offer-details" component={JobOfferDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
