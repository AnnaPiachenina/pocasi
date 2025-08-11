import React from 'react'
import { useRef } from 'react';
import Left from './icons/Left.svg';
import Right from './icons/Right.svg';
import { iconMap } from './WeatherIcons';

const HourlyWeather = ({hourly}) => {
    // kontrola, jestli je hourly pole a jestli obsahuje data
    if (!hourly || !Array.isArray(hourly)) return null;
    // vytvoreni pole hodin od 00:00 do 23:00
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);
    // vytvoreni ref pro scroll
    const scrollRef = useRef(null);
    // funkce pro scroll doleva a doprava
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="hour-scroll">

          <img onClick={scrollLeft} src={Left} alt='left' className='scroll' width={32} height={32}/>
    
          <ul className="day-t-list" ref={scrollRef}>
            {hourly.slice(0, 24).map((hour, idx) => {
              const date = new Date(hour.dt * 1000);
              const hourSpecific = hours[date.getHours()];
              const IconComponent = iconMap[hour.weather[0].icon] || iconMap['01d'];
              return (
                <li key={idx} className="day-t-item">
                    <div className="day-t-content">
                        {hourSpecific}
                        {IconComponent && <img src={IconComponent} alt="weather icon" width={32} height={32} />}
                        {Math.round(hour.temp)}°C
                   </div>
                </li>
              );
            })}
          </ul>
          <img onClick={scrollRight} src={Right} alt='right' className='scroll' width={32} height={32}/>

        </div>
      );
    };

export default HourlyWeather