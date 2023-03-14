import { useEffect, useState } from "react";
import "./App.css";
import { getWeatherData } from "./components/weather.api";
import { Report } from "./types/common types/common.types";

function App() {
  const [weatherdata, setWeatherdata] = useState<Report>();
  const [search, setsearch] = useState("");
  const fetchData = async (city: string) => {
    const apiData = await getWeatherData(city);
    console.log(apiData);
    setWeatherdata(apiData);
    return apiData;
  };

  const handle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);

    setsearch(e.target.value);
  };
  const searchCity = (e:any) => {
e.preventDefault();
    fetchData(search);
  };
  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <>
      <form onSubmit={searchCity} >
        <input onChange={handle} type="text" name="" id="" />
        <button type="submit" >
          search
        </button>
      </form>
      <h1>Weather app </h1>

      <div className="weatherdata">
        {/* {JSON.stringify(weatherdata)} */}
        <h1> country: {weatherdata && weatherdata.sys.country}</h1>
        <h1>city name :{weatherdata && weatherdata.name} </h1>
        <h1> max temp: {weatherdata && weatherdata.main.temp_max}</h1>
        <h1> min temp: {weatherdata && weatherdata.main.temp_min}</h1>

        <h1>
          weather description:
          {weatherdata && weatherdata.weather[0].description}
        </h1>
      </div>
    </>
  );
}

export default App;
