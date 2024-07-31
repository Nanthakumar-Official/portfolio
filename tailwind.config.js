module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                roboto: ['"Roboto Condensed', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                barlow: ['Barlow Condensed', 'sans-serif'],
                exo: ['Exo','sans-serif'],
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            // backgroundImage: {
            //     'register-background': "url('/src/assets/background/register-bg.jpeg')",
            //     'login-background': "url('/src/assets/background/bg-signin.jpg')",
            // },
            colors: {
                primary: {
                    100: '#22331D',
                    200: '#F65A11',
                    300: '#6A6D69',
                    400: '#EFEDE7',
                },
                secondary: '#fdf9ec',
                BackgroundGray: '#F3F3F3',
                customBlack: '#333333',
                customGray: '#e1e1e1',
                error: '#E97171',
                success: '#2EC1AC',
            },
        },
        // backgroundImage: {
        //     "hero": "url(/images/hero.jpg)",
        //     "shop-hero": "url(/images/shop_hero.png)",
        // },
    },
    plugins: [],
};
