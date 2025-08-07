import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import NavBar_Light from "./reusable/NavBar_Light";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
        const location = useLocation();

        // Define valid route patterns (static and dynamic)
        const routePatterns = [
                "/", // Homepage
                "/textiles",
                "/shop",
                "/collections",
                "/stories",
                "/contact",
                "/history",
                "/professional",
                "/customer-service",
                "/account",
                "/login",
                "/register",
                "/shipping-to",
                "/cookie-policy",
                "/privacy-policy",
                "/returns-policy",
                "/terms-and-conditions",
                "/newsletter",
                "/products/:id", // Example dynamic route
                "/collections/:category", // Example dynamic route
                "/account/:section" // Example dynamic route
        ];

        // Check if the current path matches any valid route pattern
        const isValidRoute = routePatterns.some((pattern) =>
                matchPath({ path: pattern, end: true }, location.pathname)
        );

        return (
                <div>
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
