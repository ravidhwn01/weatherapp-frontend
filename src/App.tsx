import { useEffect, useState } from "react";
import "./App.css";
import { getWeatherData } from "./components/weather.api";

export interface Report {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

function App() {
  const [weatherdata, setWeatherdata] = useState<Report>();
  const [search, setsearch] = useState("");
  const a = async (city: string) => {
    const b = await getWeatherData(city);

    console.log(b);
    setWeatherdata(b);
    return b;
  };

  const handle = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);

    setsearch(e.target.value);
  };
  const searchCity = () => {
    a(search);
  };
  useEffect(() => {
    a("");
  }, []);

  return (
    <>
      <form>
        <input onChange={handle} type="text" name="" id="" />
        <button type="button" onClick={searchCity}>
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
          weather description:{" "}
          {weatherdata && weatherdata.weather[0].description}
        </h1>
      </div>
    </>
  );
}

export default App;
