import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import { SocialMediaLinks } from '../components/SocialMediaLinks';
import { Services } from '../components/Services';
import Exhibition from '../components/Exhibition';
const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className='bg-black text-white overflow-x-hidden tracking-tighter antialiased'>
            {/* {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <HomePageHeroSection />
                </>
            )} */}
            {/* <Header />
            <HomePageHeroSection />
            <DragCards /> */}
            <Header />
            <HeroBanner />
            <About />
            <SocialMediaLinks />
            <Exhibition />
            <Services />
        </main>
    );
};

export default HomePage;
