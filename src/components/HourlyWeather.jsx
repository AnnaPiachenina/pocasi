import React from 'react'

const HourlyWeather = ({hourly}) => {
    if (!hourly || !Array.isArray(hourly)) return null;
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

    return (
        <div className='day-info'>
            <ul className='day-t-list'>  
                {hourly.slice(1, 8).map((hour, idx) => {
                    const date = new Date(hour.dt * 1000);
                    const hourSpecific = hours[date.getHours()];
                    return  ( 
                        <li key={idx} className='day-t-item'>
                            {hourSpecific},{Math.round(hour.temp)}°C, {hour.weather[0].description}
                            <img
                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                            alt={hour.weather[0].description}
                        />
                        </li>
                        );
                    })}
            </ul>

        </div>
    )
}

export default HourlyWeather