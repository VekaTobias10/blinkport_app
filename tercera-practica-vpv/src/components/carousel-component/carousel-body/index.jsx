import lima from '../../../assets/img-carousel/lima.png'
import jordan from '../../../assets/img-carousel/jordan.png'
import newyork from '../../../assets/img-carousel/newyork.png'
import paris from '../../../assets/img-carousel/paris.png'
import riodejaneiro from '../../../assets/img-carousel/riodejaneiro.png'
import shanghai from '../../../assets/img-carousel/shanghai.png'
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { useStyles } from './style.js';

import "./style.css";


function CarouselBody() {
    const classes = useStyles();
    return (
        <div className={classes.bodyContainer}>

            <div className="img_container">
                <img className="img_cities" src={lima} alt="img-lima"></img>
                <p className="city_name">Lima</p>
            </div>
            <div className="img_container">
                <img className="img_cities" src={jordan} alt="img-jordan"></img>
                <p className="city_name">Jordan</p>
            </div>
            <div className="img_container">
                <img className="img_cities" src={newyork} alt="img-newyork"></img>
                <p className="city_name">New York</p>
            </div>
            <div className="img_container">
                <img className="img_cities" src={paris} alt="img-paris"></img>
                <p className="city_name">Paris</p>
            </div>
            <div className="img_container">
                <img className="img_cities" src={riodejaneiro} alt="img-riodejaneiro"></img>
                <p className="city_name">Rio de J.</p>
            </div>
            <div className="img_container">
                <img className="img_cities" src={shanghai} alt="img-shanghai"></img>
                <p className="city_name">Shanghai</p>
            </div>


        </div>
    )
}
export default CarouselBody;