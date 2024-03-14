import { useEffect, useState } from "react";
import WeatherDetails from "./weather-details";
// images import
import { FaSearch } from "react-icons/fa";
import Cloud from  "./cloud.png";
import Drizzle from "./drzzle.png";
import Rain from "./rain.png";
import Snow from "./snow.png";
import Clearw from "./weather-clear.png";
// main funtion component
function App() {
  // states to manuplate the weatherDetails
  const [icon,setIcon]=useState(Clearw);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("chennai");
  const [country,setCountry]=useState("IND");
  const [lat,setLat]=useState(0);
  const [lag,setLag]=useState(0);
  const [hum,sethum]=useState(0);
  const [speed,setspeed]=useState(0);

  const [cityNot,setCityNot]=useState(false);
  const [load,setLoad]=useState(false);

  const weatherMap={
    "01d":Clearw,
    "01n":Clearw,
    "02d":Cloud,
    "02n":Cloud,
    "03d":Drizzle,
    "03n":Drizzle,
    "04d":Drizzle,
    "04n":Drizzle,
    "09d":Rain,
    "09n":Rain,
    "10d":Rain,
    "10n":Rain,
    "13d":Snow,
    "13n":Snow,
  }

  const search=async()=>{
    setLoad(true)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=e58acef19584db03f2aacd2e1e9441d4&units=Metrics`
    try{
    let res=await fetch(url);
    let sampleData=await res.json();
    if(sampleData.cod==="404"){
      alert("City Not Found");
      setCityNot(true);
      setLoad(false);
      return;
    }
    sethum(sampleData.main.humidity);
    setspeed(sampleData.wind.speed);
    setLag(sampleData.coord.lon);
    setLat(sampleData.coord.lat);
    setCountry(sampleData.sys.country);
    setCity(sampleData.name);
    setTemp(sampleData.main.temp);
    var weatherIconCode=sampleData.weather[0].icon;
    setIcon(weatherMap[weatherIconCode] || Clearw)
    setCityNot(false);
    }
    catch(error){
console.log("An error acquired".error.message)
    }
    finally{
setLoad(false)
    }
  }
// to handle search function
const [text,setText]=useState("Chennai")
const handleCity=(e)=>{
setText(e.target.value);
}
const handleKeyDown=(e)=>{
  if(e.key==="Enter"){
    search();
  }
}
useEffect(()=>{
  search();
},[]);

  return (
     <div className="container">
      {/* input search box */}
      <div className="input-box">
      <input 
      type="text" 
      placeholder="search city" 
      onChange={handleCity} 
      value={text} onKeyDown={handleKeyDown}>
      </input>
      <span onClick={()=>search()}><FaSearch/></span>
      </div>
      {/* weatherDetails part */}
      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lag={lag} speed={speed} hum={hum}/>
      <p className="copyright">Designed by <span>RAK</span></p>
     </div>

  );
}

export default App;
