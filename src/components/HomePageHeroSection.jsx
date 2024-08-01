import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, UserIcon } from '@heroicons/react/24/outline';
import nanthakumar from '../assets/persional/nanthakumar.jpg';
import { DivOrigami } from './hero/LogoOrigami';
import CustomTags from './hero/CustomTags';

export default function HomePageHeroSection() {
    return (
        <div className='bg-white h-screen'>
            <div className='mx-auto max-w-7xl flex flex-col h-full justify-between'>
                <div className='text-center pt-40'>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='font-exo font-extrabold text-5xl text-primary-100 w-[80%] m-auto '
                    >
                        Transforming <span className='text-primary-200'>0s</span> &{' '}
                        <span className='text-primary-200'>1s</span> into Dynamic User Experiences
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-primary-300 text-2xl py-7'
                    >
                        Crafting Code with Precision and Passion
                    </motion.p>
                </div>
                <div className='lg:pb-5'>
                    <div class=' mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 font-exo'>
                        <div class='h-full bg-gray-100 rounded-md p-4'>
                            <div className='border-b-2 pb-2'>
                                <p>
                                    Optimized bcrypt in JavaScript with zero dependencies.
                                    Compatible to the C++ bcrypt binding on node.js and also working
                                    in the browser.
                                </p>
                            </div>
                            <div className='flex justify-between font-semibold py-5'>
                                <div className=''>
                                    <h2 className='font-extrabold text-2xl'>20+</h2>
                                    <span className='text-primary-300 font-light'>Projects</span>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        class='text-white bg-primary-200  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2'
                                    >
                                        <ChevronRightIcon className='h-6 w-6' />
                                    </button>
                                </div>
                            </div>
                            <CustomTags />
                        </div>
                        <div class='font-semibold '>
                            <div className='text-center rounded-md text-white'>
                                <DivOrigami />
                            </div>
                        </div>
                        <div class='bg-gray-200 rounded-md'>
                            <img src={nanthakumar} alt='' className='h-full rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
