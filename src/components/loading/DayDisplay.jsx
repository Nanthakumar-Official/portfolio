// src/components/DayDisplay.js
import React, { useState, useEffect } from 'react';

const DayDisplay = () => {
    const [day, setDay] = useState('');

    useEffect(() => {
        const updateDay = () => {
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            const currentDay = days[new Date().getDay()];
            setDay(currentDay);
        };

        updateDay();
        const timer = setInterval(updateDay, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    return <div>{day}</div>;
};

export default DayDisplay;
