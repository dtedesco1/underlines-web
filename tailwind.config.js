/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
                serif: ['"Palatino Linotype"', 'Palatino', 'Iowan Old Style', 'ui-serif', 'serif'],
                masthead: ['"Didot"', 'Bodoni MT', 'Didot LT STD', 'Garamond', 'serif'],
            },
            letterSpacing: {
                widecaps: '0.35em',
                tightercaps: '0.18em',
            },
            colors: {
                ink: {
                    DEFAULT: '#1f1b16',
                    muted: '#6c655d',
                    faint: '#b5aea5',
                },
            },
            boxShadow: {
                insetLine: 'inset 0 -1px 0 0 rgba(28, 25, 23, 0.08)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

