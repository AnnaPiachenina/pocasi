import React from 'react'

const WeeklyWeather = ({daily}) => {
    if (!daily || !Array.isArray(daily)) return null;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='week-info'>
            <ul className='week-t-list'>  
                {daily.slice(1, 8).map((day, idx) => {
                    const date = new Date(day.dt * 1000);
                    const dayName = days[date.getDay()];
                    return  ( 
                        <li key={idx} className='week-t-item'>
                            <div className='week-container'>
                                <p>{dayName}</p>
                                <p>{Math.round(day.temp.day)}°C</p>
                                <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                alt={day.weather[0].description}
                                />
                                <p>{day.wind_speed} m/s</p>
                            </div>
                        </li>
                        );
                    })}
            </ul>

        </div>
    )
}

export default WeeklyWeather