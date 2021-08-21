import React from 'react';
import PriceCardLanding from '../components/price-component/price-section';
import Header from '../components/header-component/header';
import CarrouselContainer from '../components/carousel-component/carousel-container';

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