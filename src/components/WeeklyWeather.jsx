import React from 'react'
import { iconMap } from './WeatherIcons';

const WeeklyWeather = ({daily}) => {
    if (!daily || !Array.isArray(daily)) return null;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='week'>
            <ul className='week-info'>  
                {daily.slice(1, 8).map((day, idx) => {
                    const date = new Date(day.dt * 1000);
                    const dayName = days[date.getDay()];
                    const IconComponent = iconMap[day.weather[0].icon] || iconMap['01d'];

                    return  ( 
                        <li key={idx} className='week-list'>
                            <div className='week-container'>
                                <p className='week-item'>{dayName}</p>
                                <p className='week-item'>{Math.round(day.temp.day)}°C</p>
                                <p className='week-item'>{IconComponent && <img src={IconComponent} alt="weather icon" width={32} height={32} />}</p>
                                <div className='week-item wind-speed'>
                                    <p>{day.wind_speed}</p>
                                    <p>m/s</p>
                                </div>
                            </div>
                        </li>
                        );
                    })}
            </ul>

        </div>
    )
}

export default WeeklyWeather