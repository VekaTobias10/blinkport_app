import "./style.css";
import Line1 from '../../../assets/img/Line1.png'



function CarouselHeader() {
    return (
        <div className="header-carousel_container">
            <div className="line_title">
                <img className="line" src={Line1} alt="img-linea"></img>
                <h4 className="title_carousel">TOP Destination</h4>
            </div>

            <p className="sub-titel_carrousel">Check out the best rated destinations<br></br> and choose easily your next jurney</p>
        </div>
    )
}

export default CarouselHeader;