/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'#000000',
        'gray':'#DFDFDF',
        'white':'#FFFFFF',
        'red':'#DF5656',
        'accent':'linear-gradient(27deg, #FFC593 0%, #BC7198 49%, #5A77FF 95%)',
        'dark-gray':'#f5f5f5'
      },
      fontFamily:{
        'sans-serif' : ['DM Sans', 'sans-serif']
      },
      backgroundImage: { 
        'facebook': "url('/public/images/shared/desktop/facebook.svg')" ,
        'youtube': "url('/public/images/shared/desktop/youtube.svg')" ,
        'pinterest': "url('/public/images/shared/desktop/pinterest.svg')" ,
        'instagram': "url('/public/images/shared/desktop/instagram.svg')" ,
        'twitter': "url('/public/images/shared/desktop/twitter.svg')" ,
        // Hover
        'facebook-hover': "url('/public/images/shared/desktop/facebook-hover.svg')" ,
        'youtube-hover': "url('/public/images/shared/desktop/youtube-hover.svg')" ,
        'pinterest-hover': "url('/public/images/shared/desktop/pinterest-hover.svg')" ,
        'instagram-hover': "url('/public/images/shared/desktop/instagram-hover.svg')" ,
        'twitter-hover': "url('/public/images/shared/desktop/twitter-hover.svg')" ,

      }
    },
  },
  
}