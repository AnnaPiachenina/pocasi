import React from 'react'
import { useRef } from 'react';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

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
          
          <FaCaretLeft className='size-9' onClick={scrollLeft} />
    
          <ul className="day-t-list" ref={scrollRef}>
            {hourly.slice(0, 24).map((hour, idx) => {
              const date = new Date(hour.dt * 1000);
              const hourSpecific = hours[date.getHours()];
              return (
                <li key={idx} className="day-t-item">
                    <div className="day-t-content">
                        {hourSpecific}
                        <img
                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                            alt={hour.weather[0].description}
                        />
                        {Math.round(hour.temp)}°C
                   </div>
                </li>
              );
            })}
          </ul>

          <FaCaretRight className='size-9' onClick={scrollRight}/>

        </div>
      );
    };

export default HourlyWeather