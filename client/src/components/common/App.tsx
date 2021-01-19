import React from 'react';

import Header from './Header';
import Footer from './Footer';
import JobOffer from '../JobOffer/JobOfferList';
import JobOfferDetails from '../JobOffer/JobOfferDetails';

function App() {
  return (
    <div>
      <Header />
      <JobOfferDetails />
      <Footer />
    </div>
  );
}

export default App;
