import Landing from '../components/Landing';
import Stories from '../components/Stories';
import Features from '../components/Features';
import { BackgroundImageInterface, LandingInterface } from '../Interfaces'
import React from 'react';
import { Images } from '../data/imagesName'
import { imagesUrls } from '../data/imagesUrl'
import AnimatedComponent from '../components/AnimatedComponent'
const Home :React.FC = () =>{
    const landingData : Array<LandingInterface> = [
        {
            id:0,
            image:Images.CREATE_AND_SHARE,
            heading: 'Create and share your photo stories.',
            description:'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
            buttonValue :'Get an invite',
            accent:true,
            dark:true
        },
        {
            id:1,
            image:Images.BEAUTIFUL_STORIES,
            heading:"Beautiful stories every time",
            description:'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
            buttonValue:'View the stories',
            accent:false,
            dark:false
        },
        {
            id:2,
            image:Images.DESIGNED_FOR_EVERYONE,
            heading:"Designed for everyone",
            description:'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
            buttonValue:'View the stories',
            accent:false,
            dark:false
        }
]
    return(
        <AnimatedComponent>
            {
                landingData.map((section : LandingInterface)=>(
                    <Landing 
                        key={section.id}
                        image={section.image}
                        heading={section.heading} 
                        description={section.description}
                        buttonValue={section.buttonValue}
                        accent={section.accent}
                        dark={section.dark}
                        id={section.id}
                        imageUrl={imagesUrls.HOME}
                        />
                ))
            }
            <Stories />
            <Features />
        </AnimatedComponent>

    )
}

export default Home;