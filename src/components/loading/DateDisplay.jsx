// src/components/DateDisplay.js
import React, { useState, useEffect } from 'react';

const DateDisplay = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const currentDate = new Date();
            const dayOfMonth = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const year = currentDate.getFullYear();
            setDate(`${dayOfMonth}-${month}-${year}`);
        };

        updateDate();
        const timer = setInterval(updateDate, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    return <div>{date}</div>;
};

export default DateDisplay;
