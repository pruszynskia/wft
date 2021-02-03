import React from 'react';

import Header from './Header';
import Footer from './Footer';
import JobOffer from '../JobOffer/JobOfferList';
import JobOfferDetails from '../JobOffer/JobOfferDetails';
import AddJobOffer from '../JobOffer/AddJobOffer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/add-job-offer" exact component={AddJobOffer} />
          <Route path="/job-offers-list" exact component={JobOffer} />
          <Route path="/:jobOfferId" component={JobOfferDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
