// tailwind.config.js
export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
                extend: {
                        fontFamily: {
                                myfont: ["primary-font-reg", "sans-serif"] // Add custom font
                        },
                        height: {
                                "70vh": "clamp(70vh, 100%, 100vh)",
                                "40vh": "clamp(40vh, 100%, 100vh)"
                        }
                }
        },
        plugins: []
};
