import React from 'react';
import { SiPowerpages } from 'react-icons/si';
import { LuLayoutDashboard } from 'react-icons/lu';
import { SiMaterialdesignicons } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import { TbEdit } from 'react-icons/tb';
import { IoLayersOutline } from 'react-icons/io5';

const details = [
    {
        id: 1,
        name: 'Multiple Page Website',
        description: 'Premium quality Sreens Very Clean & Modern',
        href: '#',
        icon: SiPowerpages,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 2,
        name: 'Auto Layout',
        description: 'Full Auto Layout so it easy to change and use',
        href: '#',
        icon: LuLayoutDashboard,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Pixel Perfect Design',
        description: 'Distance and measure using an even multiple',
        href: '#',
        icon: SiMaterialdesignicons,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 4,
        name: 'Mobile Responsive',
        description: 'Premium quality Sreens Very Clean & Modern',
        href: '#',
        icon: DiResponsive,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 5,
        name: 'Easy Customizable',
        description: 'Premium quality Sreens Very Clean & Modern',
        href: '#',
        icon: TbEdit,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 6,
        name: 'Organized Layout',
        description: 'Premium quality Sreens Very Clean & Modern',
        href: '#',
        icon: IoLayersOutline,
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
];
const Details = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                    <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
                        Customers also purchased
                    </h2>

                    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                        {details.map((details) => (
                            <div key={details.id} className='group relative'>
                                <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                                    <details.icon />
                                </div>
                                <div className='mt-4 flex justify-between'>
                                    <div>
                                        <h3 className='text-sm text-gray-700'></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
