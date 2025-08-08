import React from 'react'
import { useRef } from 'react';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { iconMap } from './WeatherIcons';

const HourlyWeather = ({hourly}) => {
    if (!hourly || !Array.isArray(hourly)) return null;
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

    const scrollRef = useRef(null);

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
          
          <FaCaretLeft className='scroll' onClick={scrollLeft} />
    
          <ul className="day-t-list" ref={scrollRef}>
            {hourly.slice(0, 24).map((hour, idx) => {
              const date = new Date(hour.dt * 1000);
              const hourSpecific = hours[date.getHours()];
              const IconComponent = iconMap[hour.weather[0].icon] || iconMap['01d'];
              return (
                <li key={idx} className="day-t-item">
                    <div className="day-t-content">
                        {hourSpecific}
                        {IconComponent && <IconComponent size={32} />}
                        {Math.round(hour.temp)}°C
                   </div>
                </li>
              );
            })}
          </ul>

          <FaCaretRight className='scroll' onClick={scrollRight}/>

        </div>
      );
    };

export default HourlyWeather