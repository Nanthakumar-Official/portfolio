import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomePageHeroSection from '../components/HomePageHeroSection';
import Loader from '../components/loading/Loader';
import { DragCards } from '../components/DragCards';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import { SocialMediaLinks } from '../components/SocialMediaLinks';
import { Skils } from '../components/Skils';
import { ProjectView } from '../components/ProjectView';
import SubComponents from '../components/SubComponents';
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
            <SubComponents />
            <Skils />
        </main>
    );
};

export default HomePage;
