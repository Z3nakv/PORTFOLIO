import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_WEATHER_KEY

const useWeather = () => {

    const [weather, setWeather] = useState({});

    const requestWeather = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Lima,PE&appid=${API_KEY}`);
            const result = await response.json();
            
            const { lat } = result[0];
            const { lon } = result[0];
        
            const secondRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
            const secondResponse = await secondRequest.json();
            setWeather(secondResponse);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        requestWeather();
    },[])

  return { weather }
}

export default useWeather
