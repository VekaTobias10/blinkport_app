import CarouselBody from '../carousel-body'
import CarouselHeader from '../carousel-header'
import "./style.css";



function CarrouselContainer() {
    return (
        <div className="carousel_container">
            <CarouselHeader></CarouselHeader>
            <CarouselBody></CarouselBody>
        </div>

    )
}
export default CarrouselContainer;