import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="forecast">
      <div className="row">
        {props.forecastData.map((forecast, index) => (
          <div className="col" key={index}>
            <div className="forecast-day">
              <h5>{formatDate(forecast.dt)}</h5>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt={forecast.weather[0].description}
              />
              <p>{Math.round(forecast.temp.day)}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
