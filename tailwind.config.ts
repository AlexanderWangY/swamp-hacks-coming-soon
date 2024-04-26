import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hackathon: "url('/images/example1.jpg')", // THIS IS A PLACEHOLDER
      },
      animation: {
        "text1": "text1 2.5s ease-in-out forwards",
        "text2": "2.5s text1 2.5s ease-in-out forwards",
        "title-text": "2.5s title-text 5s ease-out forwards",
        "x-text": "4s x-text 7.5s ease-out forwards"
      },
      keyframes: {
        "text1": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "title-text": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "x-text": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '10xl': ['10rem', { lineHeight: '1' }],
      '11xl': ['12rem', { lineHeight: '1' }],
      '12xl': ['14rem', { lineHeight: '1' }],
      '13xl': ['16rem', { lineHeight: '1' }],
      '14xl': ['18rem', { lineHeight: '1' }],
      '15xl': ['20rem', { lineHeight: '1' }],
      '16xl': ['22rem', { lineHeight: '1' }],
      '17xl': ['24rem', { lineHeight: '1' }],
      '20xl': ['55rem', { lineHeight: '1' }],
      '25xl': ['65rem', { lineHeight: '1' }],
      '30xl': ['75rem', { lineHeight: '1' }],
      '40xl': ['95rem', { lineHeight: '1' }],
    },
  },
  plugins: [],
};
export default config;
