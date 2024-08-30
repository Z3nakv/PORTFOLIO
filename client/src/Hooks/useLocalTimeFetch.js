import React, { useEffect, useState } from 'react'

const useLocalTimeFetch = () => {
    const [time, setTime] = useState();

    const requestTime = async () => {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/Lima')
        const result = await response.json();
        const currentTime = new Date(result.datetime);
        startClock(currentTime)
    }

    const startClock = (initialTime) => {
        let currentTime = initialTime;

        setInterval(() => {
            currentTime.setSeconds(currentTime.getSeconds() + 1);
            updateClockDisplay(currentTime);
        },1000)
    }

    function updateClockDisplay(time) {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        
        setTime(`${hours}:${minutes}`);
    }

    useEffect(() => {
        requestTime();
    },[])
    
    return { time }
}

export default useLocalTimeFetch
