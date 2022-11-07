import React from 'react';
import { BackgroundImageInterface, LandingInterface } from '../Interfaces'
import BackgroundImage from './BackgroundImage';
import { imagesUrls } from '../data/imagesUrl'
import { motion } from 'framer-motion'
type props = LandingInterface & BackgroundImageInterface
const Landing: React.FC<props> = ({
    heading,
    image,
    description,
    buttonValue,
    dark,
    accent,
    id,
    imageUrl
}) => {
    const link = {
        initial:{
            x:0
        },
        hover:{
            x:'-5px'
        },
        
    }

    return (
        <section className={ `flex flex-col flex-nowrap md:items-center ${dark ? " bg-black text-white" : 'bg-white text-black'}
            ${id % 2 === 0 ? 'md:flex-row-reverse': 'md:flex-row'} m-0 p-0`}> 
            <div className='h-[29.4rem] md:h-[65rem] md:w-[35.547%] xl:w-[57.639%]'>
                <BackgroundImage image={image} imageUrl={imageUrl} />
            </div>
            <div className="relative w-full pt-0 pl-12 pr-9 pb-28 md:justify-center min-h-[41.9rem] md:h-[65rem] 
                    md:w-[64.453%] md:p-0 md:flex md:items-center xl:w-[42.316%]"> 
                { 
                    accent && <div className=' accent absolute top-0 w-44 h-2 md:top-auto md:left-0 md:w-2 md:h-[26rem]' ></div>
                } 
                <div className = 'relative pt-28 md:py-0 md:pl-[5.4rem] pr-24  md:items-center flex-col' > 
                    <h1 className="uppercase font-bold text-6xl md:max-w-[38.7rem] md:text-[4rem] tracking-wider" > 
                        { heading }
                    </h1> 
                    <p className="opacity-60 text-2xl w-full mt-6  md:max-w-[38.7rem]" > 
                        { description }
                    </p> 
                    { buttonValue && 
                        <motion.a 
                            href={id > 0 ?'/stories' :'#'} 
                            className="group flex flex-row space-x-6 cursor-pointer w-full h-full mt-9" 
                            initial="initial"
                            whileHover='hover'
                            > 
                            <input type='button' value={buttonValue} className = 'uppercase cursor-pointer ease-out duration-300 group-hover:underline group-hover:ease-in' /> 
                            <motion.img src={
                                dark
                                    ? process.env.PUBLIC_URL + imagesUrls.SHARED + 'desktop/arrow-white.svg'
                                    : process.env.PUBLIC_URL + imagesUrls.SHARED + 'desktop/arrow.svg'
                                }
                                alt = "Next Arrow Icon" 
                                variants={link}
                                transition={{duration:0.35}}
                                /> 
                        </motion.a>
                    }
                </div>
            </div>
        </section>
    )
}

export default Landing;