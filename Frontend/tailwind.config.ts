// tailwind.config.js
export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
                extend: {
                        fontFamily: {
                                myfont: ["primary-font-reg", "sans-serif"] // Add custom font
                        }
                }
        },
        plugins: []
};
