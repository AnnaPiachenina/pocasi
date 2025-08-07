import React, {useEffect} from 'react'
import { useState } from 'react';
import './styles/style.css'   
import cityList from '../data/city.list.json';
import WeeklyWeather from './WeeklyWeather';
import HourlyWeather from './HourlyWeather';

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

            setWeatherData({
                location: city.name,
                temperature: Math.round(data.current.temp),
                feels_like: Math.round(data.current.feels_like),
                humidity: data.current.humidity,
                description: data.current.weather[0].description,
                icon: data.current.weather[0].icon,
                wind: data.current.wind_speed,
                hourly: data.hourly,
                daily: data.daily,

            });
        }   catch (error) {
        }
    }

    useEffect(() => {
        search ('Prague');
    },[])

  return (
    <div className='weather-card'>
        <div className='main-info'>
            <div>
                <input type="text" placeholder='search' className='search-bar'/>
            </div>
            <h1>{weatherData.location}</h1>
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
                />
            <h2>{weatherData.description}</h2>
            <p>{weatherData.temperature}</p>
        </div>

        <HourlyWeather hourly={weatherData.hourly}/>
        <WeeklyWeather daily={weatherData.daily}/>
        
    </div>
  )
}

export default Weather