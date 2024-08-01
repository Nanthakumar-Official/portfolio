import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomePageHeroSection from '../components/HomePageHeroSection';
import Loader from '../components/loading/Loader';
import { DragCards } from '../components/DragCards';
const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <HomePageHeroSection />
                </>
            )} */}
            <Header />
            <HomePageHeroSection />
            <DragCards />
        </>
    );
};

export default HomePage;
