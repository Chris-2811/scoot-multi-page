/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html,jsx,tsx}', '*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1240px',
      xl: '1440px',
    },

    fontSize: {
      xs: '0.9375rem', // 15px
      sm: '1.125rem', // 18px
      base: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '2.5rem', // 40px
      '2xl': '3rem', // 48px
      '3xl': '3.5rem', // 56px
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      letterSpacing: {
        'ls-100': '-2.5px',
        'ls-200': '-2.143px',
        'ls-300': '-1.786px',
        'ls-400': '-1.071px',
      },

      colors: {
        primary: 'hsl(40 97% 58%)',
        'primary-light': 'hsl(39, 100%, 94%)',

        secondary: 'hsl(216 17% 35%)',
        'secondary-light': 'hsl(217 12% 62%)',
        'secondary-lighter': 'hsl(212 41% 93%)',
        'secondary-lightest': 'hsl(214 37% 58%)',

        'heading-primary': 'white',
        'heading-secondary': 'hsl(216 17% 35%)',
        body: 'hsl(217 12% 62%)',
        footer: '#333A44',
        cta: 'hsl(216 17% 35%)',
      },

      fontFamily: {
        sans: ['Lexend Deca', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Lexend Deca', 'sans-serif'],
        heading: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
