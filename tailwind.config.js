/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
                serif: ['var(--font-serif)', '"Palatino Linotype"', 'Palatino', 'Iowan Old Style', 'ui-serif', 'serif'],
                masthead: ['var(--font-display)', '"Didot"', 'Bodoni MT', 'Didot LT STD', 'Garamond', 'serif'],
                display: ['var(--font-display)', '"Didot"', 'Bodoni MT', 'Didot LT STD', 'Garamond', 'serif'],
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
                parchment: '#f4efe6',
                oxblood: '#7e2d24',
                tarnish: '#d1c7b8',
            },
            boxShadow: {
                insetLine: 'inset 0 -1px 0 0 rgba(28, 25, 23, 0.08)',
                bureau: '0 40px 80px rgba(31, 27, 22, 0.18)',
            },
            backgroundImage: {
                vellum: 'radial-gradient(circle at top, rgba(255,255,255,0.8), rgba(212,198,179,0.6) 45%, rgba(199,184,162,0.4))',
                filigree: 'linear-gradient(90deg, rgba(31,27,22,0.08) 0, rgba(31,27,22,0.02) 50%, rgba(31,27,22,0.08) 100%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
