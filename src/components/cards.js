import 'bootstrap/dist/css/bootstrap.css';
import{FcRating} from "react-icons/fc";
import Booking from './booking';
import Summary from './summary';
const Cards = (item) => {
    return(
        <div className="container-fluid parent">
            <div className="grid-item container-fluid">
                <img src={item.img} alt="movie-img" className="img img-fluid"/>
                <div className="details container">
                    <h1>{item.name}</h1>
                    <p>{item.genre1} {item.genre2} {item.genre3}</p>
                    <p><FcRating/> : {item.rating}</p>
                    <Summary s={item.summary}/>
                    <h4 style={{fontWeight:"bold",marginTop:"1%"}}>Timing:   </h4>
                    <h4 style={{fontWeight:"bold"}}><span>{item.day}-</span>{item.time}</h4>
                    <div className="d-grid gap-2">
                    <Booking title={item.name}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards;