import React, {useEffect} from 'react'
import { useState } from 'react';
import './styles/style.css'   
import cityList from '../data/city.list.json';
import WeeklyWeather from './WeeklyWeather';
import HourlyWeather from './HourlyWeather';
import { RiWindyLine } from "react-icons/ri";
import { GiRadiations } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";

import { iconMap } from './WeatherIcons';

const Weather = () => {

    const [weatherData, setWeatherData] = useState(false);

    const search = async (name) => {
        try {
            const city = cityList.find(
                c => c.name.toLowerCase() === name.toLowerCase()
            );
            if (!city) {
                console.error('City not found');
                return;
            }

            const { lat, lon } = city.coord;

            const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            const icon = iconMap[data.current.weather[0].icon] || iconMap['01d'];

            setWeatherData({
                location: city.name,
                temperature: Math.round(data.current.temp),
                feels_like: Math.round(data.current.feels_like),
                humidity: data.current.humidity,
                description: data.current.weather[0].description,
                icon: icon,
                wind: data.current.wind_speed,
                hourly: data.hourly,
                daily: data.daily,
                humidity: data.current.humidity,
                uvi: data.current.uvi,

            });
        }   catch (error) {
        }
    }

    useEffect(() => {
        search ('Prague');
    },[])

  return (
    <>

        <div className='weather-card'>
            <div className='main-info'>
                <div className='main-container'>

                    <div>
                        <input type="text" placeholder='search' className='search-bar'/>
                    </div>
                    <h1>{weatherData.location}</h1>
                    {weatherData.icon && <weatherData.icon size={64} />}
                    <h2>{weatherData.description}</h2>
                    <p>{weatherData.temperature}°C</p>
                    <div className='weather-details'>
                        <div className='details-item'>
                            <p>{weatherData.wind}</p>
                            <RiWindyLine className='details-icon'/>
                        </div>
                        <div className='details-item'>
                            <p>{weatherData.uvi}</p>
                            <GiRadiations className='details-icon' />
                        </div>
                        <div className='details-item'>
                            <p>{weatherData.humidity}</p>
                            <IoWaterOutline className='details-icon' />
                        </div>
                    </div>

                </div>

                <WeeklyWeather daily={weatherData.daily}/>
            </div>

            <HourlyWeather hourly={weatherData.hourly}/>
            
        </div>
    </>
  )
}

export default Weather