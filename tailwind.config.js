module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#DEDEDE',
      },
      backgroundImage: {
        'hero-pattern': "url('../public/hero_background.svg')",
      },
    },
    screens: {
      custom_3xs: { max: '479px' },
      custom_2xs: { max: '567px' },
      custom_xs: { max: '639px' },
      sm: { max: '767px' },
      md: { max: '1023px' },
      lg: { max: '1279px' },
      xl: { max: '1535px' },
      '2xl': { min: '1536px' },
    },
    container: {
      padding: {
        DEFAULT: '85px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
