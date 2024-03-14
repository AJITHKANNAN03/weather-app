import Humitity from "./humitity.png";
import Wind from "./wind.png";

// function to get weather deatails
export default function WeatherDetails(details){
    return(
      <>
      <div className="images">
        <img src={details.icon}></img>
      </div>
      <div className="temp">{details.temp} °F</div>
      <div className="location">{details.city}</div>
      <div className="country">{details.country}</div>
      {/* cord details */}
      <div className="cord">
        {/* Lattitude */}
        <div>
          <span className="lat">Latitude</span>
          <span>{details.lat}</span>
        </div>
        {/* langtitude */}
        <div>
          <span className="lag">Langitude</span>
          <span>{details.lag}</span>
        </div>
      </div>

      {/* wind speed and humitity data */}
      <div className="data-container">
        {/* humitity */}
        <div className="element">
            <img src={Humitity} alt="humitity icon"></img>
            <div className="data">
                <div className="speed">{details.hum}%</div>
                <div className="text">HUMITITY</div>
            </div>
        </div>
        {/* wind speed */}
        <div className="element">
            <img src={Wind} alt="wind icon"></img>
            <div className="data">
                <div className="speed">{details.speed}km/h</div>
                <div className="text">WIND SPEED</div>
            </div>
        </div>
      </div>
      </>
    )
  }