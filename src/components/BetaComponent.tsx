import React from "react";
import BackgroundImage from "./BackgroundImage";
import { imagesUrls } from "../data/imagesUrl";
import { motion } from 'framer-motion'
const BetaComponent:React.FC = () =>{
    return(
        <section>
            <div className="relative min-h-[28.8rem] h-full">   
                <div className = ' accent z-10 absolute top-0 left-12 w-44 h-2 md:top-0 md:left-0 md:w-2 md:h-full' > </div>
                <div className="absolute top-0 left-0 w-full min-h-[28.8rem] h-full">
                    <BackgroundImage image='bg-beta' imageUrl={imagesUrls.SHARED} />
                </div>
                <div className="relative max-w-[119rem] mx-auto flex flex-col py-24 px-12 z-20 gap-10 md:flex-row md:justify-between md:py-28 md:pr-16 md:items-center ">
                    <h1 className="text-white text-5xl font-bold uppercase md:text-7xl">
                        We're in Beta <br />
                        Get Your Invite <br />
                        Today!
                    </h1>
                    <div className="text-white flex flex-row text-xl gap-4 items-center group h-full">
                        <input type="button" value="Get An Invite"  className="uppercase group-hover:underline ease-in-out duration-300"/>
                        <img src={`${process.env.PUBLIC_URL}/images/shared/desktop/arrow-white.svg`} alt="Go-to Arrow" 
                            className="max-h-[1rem] group-hover:-translate-x-[5px] ease-in-out duration-300" />
                    </div>
                </div>
            </div>
            </section>
    )
}

export default BetaComponent;