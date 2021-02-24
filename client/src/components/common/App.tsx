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
          <Route exact path="/add-job-offer"  component={AddJobOffer} />
          <Route exact path="/job-offers-list" component={JobOffer} />
          <Route path="/:jobOfferId" component={JobOfferDetails} />
          <Route exact path="/">Home</Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
