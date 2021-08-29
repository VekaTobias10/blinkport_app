import CarouselBody from '../carousel-body/index'
import CarouselHeader from '../carousel-header/index'
import "./style.css";
import { useStyles } from './style.js';




function CarrouselContainer() {
    const classes = useStyles();
    return (
        <div className={classes.carouselContainer}>
            <CarouselHeader></CarouselHeader>
            <CarouselBody></CarouselBody>

        </div>

    )
}
export default CarrouselContainer;