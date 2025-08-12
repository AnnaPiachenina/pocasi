import React from 'react'
import { iconMap } from './WeatherIcons';

const HourlyWeather = ({hourly}) => {
    // kontrola, jestli je hourly pole a jestli obsahuje data
    if (!hourly || !Array.isArray(hourly)) return null;
    // vytvoreni pole hodin od 00:00 do 23:00
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

    return (
        <div className="hour-scroll">
    
          <ul className="hourly-list">
            {hourly.slice(0, 24).map((hour, idx) => {
              const date = new Date(hour.dt * 1000);
              const label = hours[date.getHours()];
              const icon = iconMap[hour.weather[0].icon] || iconMap['01d'];
              return (
                <li key={hour.dt} className="hourly-item">
                  <div className="hourly-content">
                    <span className="hour">{label}</span>
                    <img src={icon} alt="weather icon" width={32} height={32} />
                    <span className="t">{Math.round(hour.temp)}°C</span>
                  </div>
                </li>
              );
            })}
          </ul>

        </div>
      );
    };

export default HourlyWeather