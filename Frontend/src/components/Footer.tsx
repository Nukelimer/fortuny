import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const sitemapLinks = [
        "Textiles",
        "Shop",
        "Collections",
        "Stories",
        "Contact",
        "History",
        "Professional",
        "Customer service"
    ];

    const siteMapAccount = ["Login", "Register"];

    const socialLinks = [
        { name: "Facebook", url: "https://facebook.com" },
        { name: "Pinterest", url: "https://pinterest.com" },
        { name: "Instagram", url: "https://instagram.com" },
        { name: "Newsletter", url: "/newsletter" }
    ];

    const legalLinks = [
        { name: "Cookie Policy", url: "/cookie-policy" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Returns Policy", url: "/returns-policy" },
        { name: "Terms and conditions", url: "/terms-and-conditions" }
    ];

    return (
        <footer className=" py-12 md:pb-2">
            <div className="max-w-8xl mx-auto lg:mx-0 px-4 relative sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:place-items-start ">
                    {/* Sitemap */}
                    <div className="text-center md:text-start">
                        <p className="text-[10px] uppercase mb-2">
                            Sitemap
                        </p>
                        <ul className="space-y-1 text-base">
                            {sitemapLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        to={`/${link
                                            .toLowerCase()
                                            .replace(
                                                /\s+/g,
                                                "-"
                                            )}`}
                                        className="hover:text-phc transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account */}

                    <div className="flex flex-col gap-14">
                        <div className="text-center md:text-start">
                            <p className="text-[10px] uppercase mb-2">
                                Account
                            </p>
                            <ul className="space-y-1 text-base">
                                {siteMapAccount.map((link) => (
                                    <li key={link}>
                                        <Link
                                            to={`/${link
                                                .toLowerCase()
                                                .replace(
                                                    /\s+/g,
                                                    "-"
                                                )}`}
                                            className="hover:text-phc transition-colors"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center md:text-start">
                            <p className="text-[10px] uppercase mb-2">
                                Shipping to
                            </p>
                            <ul className="space-y-1 text-base">
                                {Array.from({ length: 1 }).map(
                                    () => (
                                        <button
                                            key={"a"}
                                            className="hover:text-phc transition-colors cursor-pointer"
                                        >
                                            International
                                            / EUR €
                                        </button>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Social Media */}
                    <div>
                        <p className="text-[10px] uppercase mb-2 text-center">
                            Get in touch
                        </p>
                        <ul className="text-center md:text-start">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-phc transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-[10px] uppercase mb-2 text-center md:text-start">
                            Legal
                        </p>
                        <ul className="text-center md:text-start">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-phc transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div>
                        {/* <h3 className="text-lg font-semibold mb-4">
                                                        About
                                                </h3> */}
                        {/* <p className="text-sm">
                                                        Website by{" "}
                                                        <Link
                                                               to="https://giga.studio"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hover:text-gray-300 transition-colors"
                                                        >
                                                                GIGA
                                                        </Link>
                                                </p> */}

                        <svg
                            className="pb-2 md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 297 24"
                            data-v-906b1091=""
                        >
                            <path
                                fill="#919191"
                                d="M4.826 5.152v5.38h15.36v4.565H4.826v8.282H.021V.588h27.003v4.564H4.826ZM58.102 24c-8.998 0-15.455-2.87-15.455-12 0-9.13 6.457-12 15.455-12 8.997 0 15.486 2.87 15.486 12 0 9.13-6.52 12-15.486 12Zm0-19.435c-6.032 0-10.14 1.693-10.14 7.435 0 5.742 4.108 7.436 10.14 7.436 6.031 0 10.175-1.699 10.175-7.436s-4.144-7.435-10.175-7.435ZM91.29 23.412V.588h19.675c4.306 0 7.172 2.934 7.172 7.245 0 4.107-3.423 6.947-7.367 7.205l7.404 8.382h-6.34l-7.304-8.314h-8.414v8.314l-4.827-.01Zm4.826-18.259v5.38h14.577a2.546 2.546 0 0 0 2.608-2.717 2.509 2.509 0 0 0-1.579-2.496 2.51 2.51 0 0 0-1.029-.176l-14.577.01ZM146.034 23.412V5.152h-11.067V.59h26.998v4.564h-11.104v18.259h-4.827ZM201.533 18.846V.588h4.823v17.411c0 3.229-2.183 5.434-5.434 5.434l-16.107-.032c-3.261 0-5.434-2.182-5.434-5.41V.587h4.827v18.258h17.325ZM252.29 23.41h-4.827L230.119 6.947V23.41h-4.664V.587h4.759l17.412 16.433V.588h4.664V23.41ZM280.231 23.41v-8.055L269.363.588h5.837l7.531 10.075L290.289.588h5.805l-11.036 14.744v8.088l-4.827-.01Z"
                            ></path>
                        </svg>
                        <p className="text-[11px] text-center leading-relaxed font-semibold mt-2 tracking-widest uppercase pb-12 md:hidden ">
                            All contents of this website are protected
                            under the laws of copyright, patent,
                            trademark, branding, design and/or other
                            legal protection. It is forbidden to copy,
                            exploit, distribute or publish any part of
                            the contents of this website without the
                            written permission of Mariano Fortuny y
                            Madrazo Venezia 1921 S.r.l.
                        </p>
                        <Link
                            to={"finanziamenti"}
                            className=" mt-2 uppercase  md:hidden"
                        >
                            <p className="hover:text-phc transition-colors flex text-[11px] text-center  items-center justify-center tracking-wide">
                                {" "}
                                Progetto finanziato con il POR FESR
                                2014-2020 Regione del{" "}
                                <br className="lg:hidden" /> Veneto
                            </p>
                        </Link>

                        <img src="/home/POR-logo-white.webp" alt="POR LOGO" className="w-full max-w-[15rem] mx-auto pt-2 md:hidden" />
                    </div>
                </div>


                <div className=" place-self-end  max-w-[28rem] hidden md:flex flex-col-reverse mb-16">
                    <img src="/home/POR-logo-white.webp" alt="POR LOGO" className=" w-full"/>
                    <p className="hover:text-phc transition-colors flex text-[11px] pt-4 justify-end w-full tracking-wide mx-auto uppercase max-w -72">
                        {" "}
                        Progetto finanziato con il POR FESR
                        2014-2020 Regione del{" "}
                        <br className="lg:hidden" /> Veneto
                    </p>
                </div>
                <div className="flex flex-col w-full">


                    <svg
                        className="pb-2 md:block hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 297 24"
                        data-v-906b1091=""
                    >
                        <path
                            fill="#919191"
                            d="M4.826 5.152v5.38h15.36v4.565H4.826v8.282H.021V.588h27.003v4.564H4.826ZM58.102 24c-8.998 0-15.455-2.87-15.455-12 0-9.13 6.457-12 15.455-12 8.997 0 15.486 2.87 15.486 12 0 9.13-6.52 12-15.486 12Zm0-19.435c-6.032 0-10.14 1.693-10.14 7.435 0 5.742 4.108 7.436 10.14 7.436 6.031 0 10.175-1.699 10.175-7.436s-4.144-7.435-10.175-7.435ZM91.29 23.412V.588h19.675c4.306 0 7.172 2.934 7.172 7.245 0 4.107-3.423 6.947-7.367 7.205l7.404 8.382h-6.34l-7.304-8.314h-8.414v8.314l-4.827-.01Zm4.826-18.259v5.38h14.577a2.546 2.546 0 0 0 2.608-2.717 2.509 2.509 0 0 0-1.579-2.496 2.51 2.51 0 0 0-1.029-.176l-14.577.01ZM146.034 23.412V5.152h-11.067V.59h26.998v4.564h-11.104v18.259h-4.827ZM201.533 18.846V.588h4.823v17.411c0 3.229-2.183 5.434-5.434 5.434l-16.107-.032c-3.261 0-5.434-2.182-5.434-5.41V.587h4.827v18.258h17.325ZM252.29 23.41h-4.827L230.119 6.947V23.41h-4.664V.587h4.759l17.412 16.433V.588h4.664V23.41ZM280.231 23.41v-8.055L269.363.588h5.837l7.531 10.075L290.289.588h5.805l-11.036 14.744v8.088l-4.827-.01Z"
                        ></path>
                    </svg>
                    <p className="text-[11px] text-center leading-relaxed font-semibold tracking-widest uppercase  md:flex flex-col hidden mt-6">
                        All contents of this website are protected
                        under the laws of copyright, patent,
                        trademark, branding, design and/or other
                        legal protection. It is forbidden to copy,
                        exploit, distribute or publish any part of
                        the contents of this website without the
                        written permission of Mariano Fortuny y
                        Madrazo Venezia 1921 S.r.l.
                    </p>
                  

                </div>
            </div>
        </footer>
    );
}

export default Footer;
