module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Example custom color
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
      },
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
