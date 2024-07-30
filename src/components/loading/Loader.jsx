import React from 'react';
import DateDisplay from './DateDisplay';
import DayDisplay from './DayDisplay';
import TimeDisplay from './TimeDisplay';

const Loader = () => {
    return (
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div>
                <div>
                    <DateDisplay />
                </div>
                <div>
                    <DayDisplay />
                </div>
            </div>
            <div>
                <div>
                    <TimeDisplay />
                </div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
