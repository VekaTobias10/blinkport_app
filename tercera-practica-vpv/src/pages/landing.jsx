import React from 'react';
import PriceCardLanding from '../components/price-component-container/price-section/price-section';
import Header from '../components/header-component/header';
import CarrouselContainer from '../components/carousel-component/carousel-container';
import ImageSection from '../components/landing-components/home-visual-section';
import FooterLanding from '../components/footer-component';



function LandingPage (){
   return (
       <React.Fragment>
       <Header></Header>
       <ImageSection></ImageSection>
       <CarrouselContainer></CarrouselContainer>    
       <PriceCardLanding></PriceCardLanding>
       <FooterLanding></FooterLanding>
       </React.Fragment>
   );
}

export default LandingPage;