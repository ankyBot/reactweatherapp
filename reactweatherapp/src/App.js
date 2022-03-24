import React, { useState, useEffect } from "react";
import "./App.css";
import { WeatherResult } from "./components/WeatherResult";

function App() {
  const [val, setVal] = useState("");
  const [result, setResult] = useState({ location: true });

  let API_key = "03b46f91c624d859f7b1e70a7fb9546f";

  let fetchWeatherData = async () => {
    if (val) {
      let city_name = val;

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

      try {
        const response = await fetch(url);
        const content = await response.json();
        setResult({
          weather: content.weather[0].description,
          temprature: `${Math.floor(content.main.temp - 273.15)}°C`,
          tempMax: `${Math.floor(content.main.temp_max - 273.15)}°C`,
          tempMin: `${Math.floor(content.main.temp_min - 273.15)}°C`,
          location: `: ${content.name}`,
        });
        setVal("");
      } catch (error) {
        setResult({ location: false });
        console.log(result.location);
      }
    } else {
      setResult({ location: true });
    }
  };

  // useEffect(() => {
  //   fetchWeatherData();
  // }, []);

  return (
    <div className="container">
      {/* user input */}
      <div className="box-1">
        <input
          type="text"
          placeholder="Enter your location"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>

      {/* result UI */}
      {result.location ? (
        <WeatherResult result={result} />
      ) : (
        <div className=" box-2">
          <h4>Location not found</h4>
        </div>
      )}
    </div>
  );
}

export default App;
