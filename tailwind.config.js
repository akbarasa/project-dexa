const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            height: {
                "65-r": "50rem",
                "65-r": "50rem",
            },
            width: {
                "65-r": "50rem",
                "65-r": "50rem",
            },
            boxShadow: {
                "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
