import React from 'react'
import './styles/style.css'   
const Weather = () => {
  return (
    <div className='weather-card'>
        <div className='main-info'>
            <h1>Mesto</h1>
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