module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        darkest: '#21282F',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#2B333B',
        lightest: '#89929B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
