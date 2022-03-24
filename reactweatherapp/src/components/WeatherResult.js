import React from "react";

export const WeatherResult = ({ result }) => {
  return (
    <div className="box-2">
      <h3>Location{result.location}</h3>

      <hr />

      <h4>
        Weather:
        <span> {result.weather}</span>
      </h4>

      <h4>
        Average Temp:
        <span> {result.temprature}</span>
      </h4>

      <h4>
        Max Temp:
        <span> {result.tempMax}</span>
      </h4>

      <h4>
        Min Temp:
        <span> {result.tempMin}</span>
      </h4>
    </div>
  );
};
