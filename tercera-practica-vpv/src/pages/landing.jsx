import React from 'react';
import PriceCardLanding from '../components/landing-components/price-section/price-section';
import Header from '../header/header';
import CarrouselContainer from '../components/carousel-container';

function LandingPage (){
   return (
       <React.Fragment>
       <Header></Header>
       <CarrouselContainer></CarrouselContainer>      
       <PriceCardLanding></PriceCardLanding>
       </React.Fragment>
   );
}

export default LandingPage;