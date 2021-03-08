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
        DEFAULT: '#262F38',
        light: '#283038',
        lightest: '#89929B',
      },
      blue: {
        DEFAULT: '#07A9FF',
        light: '#07A9FF',
      },
      green: {
        DEFAULT: '#0CD375',
        dark: '#34C759',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
