import React from 'react'
import { iconMap } from './WeatherIcons';

const WeeklyWeather = ({daily}) => {
    // kontrola, jestli je daily pole a jestli obsahuje data
    if (!daily || !Array.isArray(daily)) return null;

    return (
        <div className='week'>
            <ul className='week-info'>
                {/* prvni den v tydnu je dnesni den, takze seznam zacina z druhym */}  
                {daily.slice(1, 6).map((day, idx) => {
                    // vytvoreni data z unix timestampu
                    const date = new Date(day.dt * 1000);
                    // ziskani zkraceneho nazvu dne v tydnu podle jazyku prohlizece
                    const dayName = new Intl.DateTimeFormat(navigator.language, { weekday: 'short', month: 'short',
                    day: 'numeric' }).format(date);
                    const IconComponent = iconMap[day.weather[0].icon] || iconMap['01d'];

                    return  ( 
                        // vytvoreni seznamu s informacemi o pocasi
                        <li key={idx} className='week-list'>
                            <div className='week-container'>
                                <p className='week-item'>{dayName}</p>
                                <p className='week-item'>min: {Math.round(day.temp.min)}°C</p>
                                <p className='week-item'>max: {Math.round(day.temp.max)}°C</p>
                                <p className='week-item'>
                                    {IconComponent && <img src={IconComponent} alt="weather icon" width={32} height={32} />}
                                </p>
                                <div className='week-item wind-speed'>
                                    <p>wind: {day.wind_speed} m/s</p>
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