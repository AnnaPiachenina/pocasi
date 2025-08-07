import React, {useEffect} from 'react'
import { useState } from 'react';
import './styles/style.css'   
const Weather = () => {

    const [weatherData, setWeatherData] = useState(false);

    const search = async (name) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setWeatherData({
                location: data.name,
                temperature: Math.round(data.main.temp),
                feels_like: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                wind: data.wind.speed,

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
            <h1>Mesto</h1>
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
                />
            <h2>characteristika</h2>
            <p>26</p>
        </div>

        <div className="day-info">
            <h2>hodinovy predpoklad</h2>
            <ul className='day-t-list'>
                <li>10 hodin, 18 C slunce</li>
                <li>11 hodin, 22 C slunce</li>
                <li>12 hodin, 24 C slunce</li>
            </ul>
        </div>

        <div className='week-info'>
            <h2>denni predpoklad</h2>
            <ul className='week-t-list'>
                <li>pondeli, 25 C slunce</li>
                <li>utery, 22 C slunce</li>
                <li>streda, 20 C slunce</li>
            </ul>
        </div>
    </div>
  )
}

export default Weather