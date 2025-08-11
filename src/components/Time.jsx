import React, { useEffect, useState } from 'react';

const Time = ({ weatherData }) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    if (!weatherData?.time || !weatherData?.timezone) {
      setFormattedTime('');
      return;
    }

    const date = new Date(weatherData.time * 1000);

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

    setFormattedTime(new Intl.DateTimeFormat(navigator.language, options).format(date));
  }, [weatherData]);

  if (!weatherData) return null;

  return (
    <div>
      <p className='time'>{formattedTime}</p>
    </div>
  );
};

export default Time;
