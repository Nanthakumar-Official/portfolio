import React from 'react';
import { motion } from 'framer-motion';
import { DivOrigami } from './hero/LogoOrigami';
const SubComponents = () => {
    return (
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 lg:max-w-7xl lg:grid-cols-2'>
            <div>
                <DivOrigami />
            </div>
        </div>
    );
};

export default SubComponents;
