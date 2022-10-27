/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // backgroundImage: (theme) =>({
    //     "bg-image-gradient-180deg":[
    //       '180deg',
    //       theme("colors.gray.600"),
    //       theme("colors.gray.500"),
    //     ]
    //   }),
    extend: {
      colors:{
        'black':'#000000',
        'gray':'#DFDFDF',
        'white':'#FFFFFF',
        'red':'#DF5656',
        'accent':'linear-gradient(27deg, #FFC593 0%, #BC7198 49%, #5A77FF 95%)'
      },
      fontFamily:{
        'sans-serif' : ['DM Sans', 'sans-serif']
      },
      backgroundImage:{
        'mobile-mountains' :"url('/src/images/stories/mobile/mountains.png')",
        'desktop-mountains' :"url('/src/images/stories/desktop/mountains.jpg')",
        'mobile-sunset' :"url('/src/images/stories/mobile/cityscapes.jpg')",
        'desktop-sunset' :"url('/src/images/stories/desktop/cityscapes.jpg')",
        'mobile-18-days' :"url('/src/images/stories/mobile/18-days-voyage.jpg')",
        'desktop-18-days' :"url('/src/images/stories/desktop/18-days-voyage.jpg')",
        'mobile-architecturals' :"url('/src/images/stories/mobile/architecturals.jpg')",
        'desktop-architecturals' :"url('/src/images/stories/desktop/architecturals.jpg')",
        'mobile-world':"url('/src/images/stories/mobile/world-tour.jpg')",
        'desktop-world':"url('/src/images/stories/desktop/world-tour.jpg')",
        'mobile-unforeseen':"url('/src/images/stories/mobile/unforeseen-corners.jpg)",
        'desktop-unforeseen':"url('/src/images/stories/desktop/unforeseen-corners.jpg)",
        'mobile-king':"url('/src/images/stories/mobile/king-on-africa.jpg)",
        'desktop-king':"url('/src/images/stories/desktop/king-on-africa.jpg)",
        'mobile-trip':"url('/src/images/stories/mobile/trip-to-nowhere.jpg)",
        'desktop-trip':"url('/src/images/stories/desktop/trip-to-nowhere.jpg)",
        'mobile-rage':"url('/src/images/stories/mobile/rage-of-the-sea.jpg)",
        'desktop-rage':"url('/src/images/stories/desktop/rage-of-the-sea.jpg)",
        'mobile-running':"url('/src/images/stories/mobile/running-free.jpg)",
        'desktop-running':"url('/src/images/stories/desktop/running-free.jpg)",
        'mobile-behind':"url('/src/images/stories/mobile/behind-the-waves.jpg)",
        'desktop-behind':"url('/src/images/stories/desktop/behind-the-waves.jpg)",
        'mobile-calm':"url('/src/images/stories/mobile/calm-waters.jpg)",
        'desktop-calm':"url('/src/images/stories/desktop/calm-waters.jpg)",
        'mobile-milky-way':"url('/src/images/stories/mobile/milky-way.jpg)",
        'desktop-milky-way':"url('/src/images/stories/desktop/milky-way.jpg)",
        'mobile-night':"url('/src/images/stories/mobile/dark-forest.jpg)",
        'desktop-night':"url('/src/images/stories/desktop/dark-forest.jpg)",
        'mobile-somwarpets':"url('/src/images/stories/mobile/somwarpet.jpg)",
        'desktop-somwarpets':"url('/src/images/stories/desktop/somwarpet.jpg)",
        'mobile-land':"url('/src/images/stories/mobile/land-of-dreams.jpg)",
        'desktop-land':"url('/src/images/stories/desktop/land-of-dreams.jpg)",
      },
      
    },
  },
  
}