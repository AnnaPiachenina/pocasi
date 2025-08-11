import React, { useEffect, useState } from 'react';

const Time = ({ weatherData }) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    // kontrola zda weatherData obsahuje potrebne informace
    if (!weatherData?.time || !weatherData?.timezone) {
      setFormattedTime('');
      return;
    }
    // prevod unix casu na Date objekt a formatovani casu
    const date = new Date(weatherData.time * 1000);
    // formatovani casu podle timezone uzivatele
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: weatherData.timezone,
    };
    // pouziti Intl.DateTimeFormat pro formatovani casu, navigator.language vrati jazyk prohlizece 
    setFormattedTime(new Intl.DateTimeFormat(navigator.language, options).format(date));
  }, [weatherData]);

  return (
    <div>
      <p className='time' title='current time and date of your timezone'>{formattedTime}</p>
    </div>
  );
};

export default Time;
