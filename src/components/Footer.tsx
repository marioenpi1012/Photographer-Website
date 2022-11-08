import {Link} from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'
const Footer: React.FC = () => {
    const imagesUrl ='/images/shared/desktop/'
    const LogosArray = ['bg-facebook','bg-youtube','bg-twitter','bg-pinterest','bg-instagram']
    const HoverLogosArray = ['hover:bg-facebook-hover','hover:bg-youtube-hover','hover:bg-twitter-hover','hover:bg-pinterest-hover','hover:bg-instagram-hover']
    const link = {
        initial:{
            x:0
        },
        hover:{
            x:'-5px'
        },
        
    }
    return (
        <footer className='bg-black h-[59.9rem] py-24 md:h-[28.4rem] lg:h-[25rem]'>
            <div
                className='bg-black grid px-10 mx-auto h-full w-full py-10 md:grid-cols-2 md:items-start lg:grid-cols-3 lg:max-w-[119rem]'>
                <Link to='/' className='mb-10 text-2xl w-full lg:m-0'>
                    <img
                        srcSet={process.env.PUBLIC_URL + imagesUrl + 'logo-footer.svg'}
                        alt="Website Logo"
                        className='mx-auto md:m-0'
                        />
                </Link>
                <ul
                    className='flex flex-row gap-2 justify-center mb-12 relative md:row-start-3 md:m-0 md:mt-20 md:justify-start'>
                    {
                        LogosArray.map((Logo, i) => (
                            <li key={i} className='mx-2 cursor-pointer'>
                                {/* <img src={process.env.PUBLIC_URL + imagesUrl + Logo + '.svg'} alt="Logo" className='w-8 h-8 fill-current'/>
                                 */}
                                <div className={`w-8 h-8 bg-black ${Logo} ${HoverLogosArray[i]} bg-cover bg-no-repeat bg-center`}></div>
                            </li>
                        ))
                    }
                </ul>
                <ul
                    className='flex flex-col uppercase text-white space-y-4 text-sm items-center mb-32 md:relative
                            md:flex-row md:space-y-0 md:space-x-6 md:m-0 lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2 lg:text-lg
                    '>
                    <li className='hover:opacity-30 ease-in-out duration-300'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:opacity-30 ease-in-out duration-300'>
                        <Link to='/stories'>Stories</Link>
                    </li>
                    <li className='hover:opacity-30 ease-in-out duration-300'>
                        <Link to='/features'>Features</Link>
                    </li>
                    <li className='hover:opacity-30 ease-in-out duration-300'>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
                <motion.div 
                    className='group flex flex-row items-center justify-center gap-4 mt-4 md:row-start-1 md:col-start-2 md:justify-end lg:col-start-3 lg:m-0'
                    initial="initial"
                    whileHover='hover'
                    >
                    <input
                        type="button"
                        value="Get an invite"
                        className='text-white uppercase text-md lg:text-lg group-hover:underline ease-in-out'/>
                    <motion.img 
                        src={process.env.PUBLIC_URL + imagesUrl + 'arrow-white.svg'} 
                        alt="Arrow Icon" 
                        className='text-lg'
                        variants={link}
                        transition={{duration:0.35}}
                        />
                </motion.div>
                <div
                    className='text-gray text-sm text-center mt-10 md:w-full md:text-end md:row-start-3 md:col-start-2 md:mt-20 lg:col-start-3 lg:text-lg'>
                    Copyright 2019. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer;