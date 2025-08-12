import React, { useEffect, useState } from 'react';

const SplashImage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isParentVisible, setParentIsVisible] = useState(true);

    useEffect(() => {
  
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);


        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
       
        const timersecond = setTimeout(() => {
            setParentIsVisible(false);
        }, 2000);

   
        return () => clearTimeout(timersecond);
    }, []);

    return (
        <div
            className={`fixed h-screen inset-0 flex z-20 items-center justify-center bg-slate-900 ${!isParentVisible && "hidden"}`}
        >
            

            <svg
                className={`max-w-full px-6 max-h-full object-contain transition-transform  duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : ' -translate-y-[2000px] md:-translate-y-[1000px]'
                    } `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 297 24"
                data-v-906b1091=""
            >
                <path
                    fill="#fff"
                    d="M4.826 5.152v5.38h15.36v4.565H4.826v8.282H.021V.588h27.003v4.564H4.826ZM58.102 24c-8.998 0-15.455-2.87-15.455-12 0-9.13 6.457-12 15.455-12 8.997 0 15.486 2.87 15.486 12 0 9.13-6.52 12-15.486 12Zm0-19.435c-6.032 0-10.14 1.693-10.14 7.435 0 5.742 4.108 7.436 10.14 7.436 6.031 0 10.175-1.699 10.175-7.436s-4.144-7.435-10.175-7.435ZM91.29 23.412V.588h19.675c4.306 0 7.172 2.934 7.172 7.245 0 4.107-3.423 6.947-7.367 7.205l7.404 8.382h-6.34l-7.304-8.314h-8.414v8.314l-4.827-.01Zm4.826-18.259v5.38h14.577a2.546 2.546 0 0 0 2.608-2.717 2.509 2.509 0 0 0-1.579-2.496 2.51 2.51 0 0 0-1.029-.176l-14.577.01ZM146.034 23.412V5.152h-11.067V.59h26.998v4.564h-11.104v18.259h-4.827ZM201.533 18.846V.588h4.823v17.411c0 3.229-2.183 5.434-5.434 5.434l-16.107-.032c-3.261 0-5.434-2.182-5.434-5.41V.587h4.827v18.258h17.325ZM252.29 23.41h-4.827L230.119 6.947V23.41h-4.664V.587h4.759l17.412 16.433V.588h4.664V23.41ZM280.231 23.41v-8.055L269.363.588h5.837l7.531 10.075L290.289.588h5.805l-11.036 14.744v8.088l-4.827-.01Z"
                ></path>
            </svg>
           
        </div>
    );
};

export default SplashImage;