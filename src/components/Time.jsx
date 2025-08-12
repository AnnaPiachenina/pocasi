import React from 'react';

const Time = ({ weatherData }) => {
    // kontrola, jestli je weatherData objekt a jestli obsahuje time
    if (!weatherData?.time) return null;
    // vytvoreni data z unix timestampu, ktery prevedeme na milisekundy
    const date = new Date(weatherData.time * 1000);
    
    const formattedTime = new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);

  return (
    <div>
      <p className='time' title='Current time and date of your timezone'>{formattedTime}</p>
    </div>
  );
};

export default Time;
