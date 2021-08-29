import "./style.css";
import Line1 from '../../../assets/img/Line1.png'
import { useStyles } from './style.js';




function CarouselHeader() {
    const classes = useStyles();
    return (
        <div className={classes.headerCarouselContainer}>
            <div className={classes.lineTitle}>
                <img className={classes.line} src={Line1} alt="img-linea"></img>
                <h4 className={classes.titleCarousel}>TOP Destination</h4>
            </div>

            <p className="sub-titel_carrousel">Check out the best rated destinations<br></br> and choose easily your next jurney</p>
        </div>
    )
}

export default CarouselHeader;