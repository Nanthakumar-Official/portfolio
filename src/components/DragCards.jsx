import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const DragCards = () => {
    return (
        <section className='relative grid min-h-[70vh] w-full place-content-center overflow-hidden bg-black'>
            {/* <h2 className='relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]'>
                DEVELOPER
            </h2> */}
            <Cards />
        </section>
    );
};

const Cards = () => {
    const containerRef = useRef(null);

    return (
        <div className='absolute inset-0 z-10' ref={containerRef}>
            <Card
                containerRef={containerRef}
                content='React'
                rotate='6deg'
                top='20%'
                left='25%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
            <Card
                containerRef={containerRef}
                rotate='12deg'
                content='Tailwindcss'
                top='45%'
                left='60%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
            <Card
                containerRef={containerRef}
                rotate='-6deg'
                content='HTML5'
                top='20%'
                left='40%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
            <Card
                containerRef={containerRef}
                rotate='8deg'
                content='CSS'
                top='50%'
                left='40%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
            <Card
                containerRef={containerRef}
                rotate='18deg'
                content='Typescript'
                top='20%'
                left='65%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
            <Card
                containerRef={containerRef}
                rotate='-3deg'
                content='Sass'
                top='35%'
                left='55%'
                className='w-auto border border-white rounded-full text-white cursor-pointer'
            />
        </div>
    );
};

const Card = ({ containerRef, top, content, left, rotate, className }) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll('.drag-elements');

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'));

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.div
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            content
            className={twMerge('drag-elements absolute w-auto px-5 py-1 text-center text-white rounded-full font-semibold', className)}
            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
        >
            {content}
        </motion.div>
    );
};
