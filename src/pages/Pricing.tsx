import React, { useState } from "react";
import { LandingInterface } from "../Interfaces";
import { Images } from "../data/imagesName";
import Landing from "../components/Landing";
import { imagesUrls } from "../data/imagesUrl";
import CompareTable from "../components/CompareTable";
import BetaComponent from "../components/BetaComponent";
import AnimatedComponent from "../components/AnimatedComponent";    
import Cards from "../components/Cards";
import { Helmet } from 'react-helmet'
const Pricing:React.FC = () =>{
    const pricingData:LandingInterface = {
        id:0,
        image:Images.HERO,
        heading:'Pricing',
        description:"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos",
        accent:true,
        dark:true
    }
    const { id, image, heading, description, accent, dark} = pricingData
    return(
        <AnimatedComponent>
            <Helmet>
                <title>Photosnaps | Pricing</title>
            </Helmet>
            <Landing 
                id={id}
                image={image}
                heading={heading}
                description={description}
                accent={accent}
                dark={dark}
                imageUrl={imagesUrls.PRICING}
            />
            <Cards />
            <CompareTable />
            <BetaComponent />
        </AnimatedComponent>
    )
}

export default Pricing