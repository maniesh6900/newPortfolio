/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter : ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow: {
        "glass-inset" : "inset 0 13px 5px -9px  rgba(254, 254,91, 0.5)",  backgroundImage:{
          'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
        },
        "glass-sm" : "7px 7px 25px 0px rgba(254, 254,91, 0.3)"
    } ,
    keyframes: {
      'spin-reverse' :{
        "0% ": {transform : 'rotate(0deg)'},
        "100% ": {transform : 'rotate(-360deg)'}
      }
    },
    animation: {
      "spin-slow" : "spin 40s linear infinite",
      "spin-slow-reverse" : "spin-reverse 40s linear infinite"
    }
  },
  },
  plugins: [],
}

