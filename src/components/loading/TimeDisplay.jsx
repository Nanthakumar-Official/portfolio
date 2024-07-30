// src/components/TimeDisplay.js
import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = String(currentTime.getMinutes()).padStart(2, '0');
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert to 12-hour format
            setTime(`${formattedHours}-${minutes} ${period}`);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    return <div>{time}</div>;
};

export default TimeDisplay;
