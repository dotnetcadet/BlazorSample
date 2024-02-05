/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: [
            './**/*.html',
            './**/*.razor'
        ],
    },
    extend: {},
    content: [
        "./**/*.razor"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}