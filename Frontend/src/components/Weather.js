import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('/api/weather')
            .then(response => response.json())
            .then(data => setWeather(data));
    }, []);

    return (
        <div>
            <h2>Weather Forecast</h2>
            {weather && <p>{weather.description}</p>}
        </div>
    );
};

export default Weather;
