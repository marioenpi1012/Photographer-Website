import Landing from '../components/Landing';
// First Section 
import MobileCreate from '../images/home/mobile/create-and-share.jpg';
import TabletCreate from '../images/home/tablet/create-and-share.jpg';
import DesktopCreate from '../images/home/desktop/create-and-share.jpg';
// Second Section
import MobileBeautiful from '../images/home/mobile/beautiful-stories.jpg'
import TabletBeautiful from '../images/home/tablet/beautiful-stories.jpg'
import DesktopBeautiful from '../images/home/desktop/beautiful-stories.jpg'
// Third Section 
import MobileDesigned from '../images/home/mobile/designed-for-everyone.jpg'
import TabletDesigned from '../images/home/tablet/designed-for-everyone.jpg'
import DesktopDesigned from '../images/home/desktop/designed-for-everyone.jpg'
import Stories from '../components/Stories';
import Features from '../components/Features';
import { LandingInterface } from '../Interfaces'
import React from 'react';
const Home :React.FC = () =>{
    const landingData : Array<LandingInterface> = [
        {
            id:0,
            images :[MobileCreate, TabletCreate, DesktopCreate],
            heading: 'Create and share your photo stories.',
            description:'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
            buttonValue :'Get an invite',
            accent:true,
            dark:true
        },
        {
            id:1,
            images:[MobileBeautiful,TabletBeautiful,DesktopBeautiful],
            heading:"Beautiful stories every time",
            description:'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
            buttonValue:'View the stories',
            accent:false,
            dark:false
        },
        {
            id:2,
            images:[MobileDesigned,TabletDesigned,DesktopDesigned],
            heading:"Designed for everyone",
            description:'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
            buttonValue:'View the stories',
            accent:false,
            dark:false
        }
]
    return(
        <main>
            {
                landingData.map((section : LandingInterface)=>(
                    <Landing 
                        key={section.id}
                        images={section.images}
                        heading={section.heading} 
                        description={section.description}
                        buttonValue={section.buttonValue}
                        accent={section.accent}
                        dark={section.dark}
                        id={section.id}
                        />
                ))
            }
            <Stories />
            {/* <Features /> */}
        </main>
    )
}

export default Home;