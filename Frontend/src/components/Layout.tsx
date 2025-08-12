import React, { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import NavBar_Light from './reusable/NavBar_Light';
import Footer from './Footer';
import Loading from './Loading';
import { Outlet } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    // Define valid route patterns (static and dynamic)
    const routePatterns = [
        '/', // Homepage
        '/textiles',
        '/shop',
        '/collections',
        '/stories',
        '/contact',
        '/history',
        '/professional',
        '/customer-service',
        '/account',
        '/login',
        '/register',
        '/shipping-to',
        '/cookie-policy',
        '/privacy-policy',
        '/returns-policy',
        '/terms-and-conditions',
        '/newsletter',
        '/products/:id', // Example dynamic route
        '/collections/:category', // Example dynamic route
        '/account/:section' // Example dynamic route
    ];

    // Check if the current path matches any valid route pattern
    const isValidRoute = routePatterns.some((pattern) =>
        matchPath({ path: pattern, end: true }, location.pathname)
    );

    // Check if the current path is the homepage
    const isHomePage = matchPath({ path: '/', end: true }, location.pathname);

    // Show loading state on route change, excluding homepage
    useEffect(() => {
        if (!isHomePage) {
            setIsLoading(true);
            // Simulate loading with a timeout (adjust duration as needed)
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 500); // 500ms delay to simulate loading

            return () => clearTimeout(timer); // Cleanup on unmount or route change
        }
    }, [location.pathname, isHomePage]); // Trigger on pathname change

    return (
        <div className="relative">
            {/* Show Loading component during route transitions, except on homepage */}
            {isLoading && !isHomePage && <Loading />}

            <nav className="flex mx-auto w-full justify-center">
                <NavBar_Light />
            </nav>

            <main>
                <Outlet />
            </main>

            {isValidRoute && <Footer />}
        </div>
    );
}

export default Layout;