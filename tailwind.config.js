/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xxs': ['0.63rem', '1']
      },
      colors: {
        cmyk_pink: '#ef15bf',
        cmyk_yellow: '#ebef15',
        cmyk_orange: '#ef9815',
        cmyk_red: '#ef1563',
        cmyk_lavender: '#b596f8',
        cmyk_blue: '#15aeef',
        cmyk_purple: '#7515ef',
        cmyk_green: '#15efae',
        cmyk_darkpurple: '#382c51',
        cmyk_grey_100: '#0c0b0d',
        cmyk_grey_200: '#17161b',
        cmyk_grey_300: '#232128',
        cmyk_grey_400: '#2f2c36',
        cmyk_grey_500: '#3a3643',
        cmyk_grey_600: '#464150',
        cmyk_grey_700: '#524c5e',
        cmyk_grey_800: '#5d576b',
        cmyk_grey_900: '#696278',
        cmyk_grey_1000: '#756d86',
        cmyk_grey_1100: '#817992',
        cmyk_grey_1200: '#8d879d',
        cmyk_grey_1300: '#9a94a8',
        cmyk_grey_1400: '#a7a1b3',
        cmyk_grey_1500: '#b3afbe',
        cmyk_grey_1600: '#c0bcc9',
        cmyk_grey_1700: '#cdc9d3',
        cmyk_grey_1800: '#d9d7de',
        cmyk_grey_1900: '#e6e4e9',
        cmyk_grey_2000: '#f2f2f4',

        // SF6
        sf6_darkerpurple: '#080217',
        sf6_darkpurple: '#180644',
        sf6_lightpurple: '#c326c4',
        sf6_mediumpurple: '#7c0994',
        sf6_royalpurple: '#44279d',
      },
    },
  },
  plugins: [],
}
