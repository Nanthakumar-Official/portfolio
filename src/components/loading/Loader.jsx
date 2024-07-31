import React from 'react';
import DateDisplay from './DateDisplay';
import DayDisplay from './DayDisplay';
import TimeDisplay from './TimeDisplay';
const Loader = () => {
    return (
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 font-exo font-extrabold uppercase overflow-hidden h-[100vh]'>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between'>
                    <div>
                        <DateDisplay />
                        <DayDisplay />
                        <TimeDisplay />
                    </div>
                    <div className='text-right'>
                        <p>DEVELOPING</p>
                        <p>TESTING</p>
                        <p>SEO</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex text-5xl justify-end w-full text-right'>
                        <p className='px-3'>P</p>
                        <p className='px-3'>O</p>
                        <p className='px-3'>R</p>
                        <p className='px-3'>T</p>
                        <p className='px-3 tracking-tighter'>----</p>
                    </div>
                    <div className='flex text-5xl justify-end w-full text-right'>
                        <p className='px-3'>F</p>
                        <p className='px-3'>O</p>
                        <p className='px-3'>L</p>
                        <p className='px-3'>I</p>
                        <p className='px-3'>O</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p>CV & SELECTED WORKS</p>
                    </div>
                    <div>
                        <p className='tracking-widest'>NANTHAKUMAR . R</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
