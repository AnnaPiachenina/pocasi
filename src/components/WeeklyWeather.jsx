import React from 'react'
import { iconMap } from './WeatherIcons';

const WeeklyWeather = ({daily}) => {
    if (!daily || !Array.isArray(daily)) return null;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='week-info'>
            <ul className='week-t-list'>  
                {daily.slice(1, 8).map((day, idx) => {
                    const date = new Date(day.dt * 1000);
                    const dayName = days[date.getDay()];
                    const IconComponent = iconMap[day.weather[0].icon] || iconMap['01d'];

                    return  ( 
                        <li key={idx} className='week-t-item'>
                            <div className='week-container'>
                                <p>{dayName}</p>
                                <p>{Math.round(day.temp.day)}°C</p>
                                {IconComponent && <IconComponent size={32} />}
                                <div className='wind-speed'>
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