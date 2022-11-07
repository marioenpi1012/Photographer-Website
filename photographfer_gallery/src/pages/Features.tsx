import React from "react"
import { Images } from "../data/imagesName"
import { LandingInterface } from "../Interfaces"
import Landing from "../components/Landing"
import { imagesUrls } from "../data/imagesUrl"
import FeaturesComponent from "../components/Features"
import BetaComponent from "../components/BetaComponent"
import AnimatedComponent from "../components/AnimatedComponent"
const Features:React.FC = () =>{
    const FeaturesData:LandingInterface = {
        id:0,
        image:Images.HERO,
        heading:'Features',
        description:'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.',
        accent:true,
        dark:true,
    }
    const {id, image, heading, description, accent, dark } = FeaturesData
    return(
        <AnimatedComponent>
            <Landing 
                key={id}
                id={id}
                image={image}
                heading={heading}
                description={description}
                accent={accent}
                dark={dark}
                imageUrl={imagesUrls.FEATURES}
            />
            <FeaturesComponent />
            <BetaComponent />
        </AnimatedComponent>
    )
}

export default Features