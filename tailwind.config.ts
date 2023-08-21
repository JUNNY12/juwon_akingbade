import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sharedComponents/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'class',
        fontFamily: {
        'myFont': ['"Roboto Slab"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'footer': "url('/background.png')",
      },
      screens: {
        'desktop': { 'max': '2560px' },
        'laptopL': { 'max': '1600px' },
        'laptopM': { 'max': '1440px' },
        'laptopS': { 'max': '1280px' },
        'tabletXL': { 'max': '1200px' },
        'tabletL': { 'max': '1024px' },
        'tabletM': { 'max': '920px' },
        'tabletS': { 'max': '768px' },
        'tabletXS': { 'max': '640px' },
        'mobileXL': { 'max': '540px' },
        'mobileL': { 'max': '425px' },
        'mobileM': { 'max': '375px' },
        'mobileS': { 'max': '320px' },
      },
    },
  },
  plugins: [],
}
export default config
