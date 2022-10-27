import Facebook from '../images/shared/desktop/facebook.svg'
import Youtube from '../images/shared/desktop/youtube.svg'
import Twitter from '../images/shared/desktop/twitter.svg'
import Pinterest from '../images/shared/desktop/pinterest.svg'
import Instagram from '../images/shared/desktop/instagram.svg'
import LogoFooter from '../images/shared/desktop/logo-footer.svg'
import Arrow from '../images/shared/desktop/arrow-white.svg'
import {Link} from 'react-router-dom'
import React from 'react'
const Footer: React.FC = () => {
    const LogosArray = [Facebook, Youtube, Twitter, Pinterest, Instagram]
    return (
        <footer className='bg-black'>
            <div
                className='bg-black grid px-10 mx-auto h-full w-full py-10 md:grid-cols-2 md:items-start lg:grid-cols-3 lg:max-w-[119rem]'>
                <Link to='/' className='mb-10 text-2xl w-full lg:m-0'>
                    <img
                        srcSet={LogoFooter}
                        alt="Website Logo"
                        className='mx-auto md:m-0'
                        />
                </Link>
                <ul
                    className='flex flex-row gap-2 justify-center mb-12 relative md:row-start-3 md:m-0 md:mt-20 md:justify-start'>
                    {
                        LogosArray.map((Logo, i) => (
                            <li key={i} className='mx-2'>
                                <img src={Logo} alt="Logo" className='w-8 h-8'/>
                            </li>
                        ))
                    }
                </ul>
                <ul
                    className='flex flex-col uppercase text-white space-y-4 text-sm items-center mb-32 md:relative
                            md:flex-row md:space-y-0 md:space-x-6 md:m-0 lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2 lg:text-lg
                    '>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/stories'>Stories</Link>
                    </li>
                    <li>
                        <Link to='/features'>Features</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                </ul>
                <div className='flex flex-row items-center justify-center gap-4 mt-4 md:row-start-1 md:col-start-2 md:justify-end lg:col-start-3 lg:m-0'>
                    <input
                        type="button"
                        value="Get an invite"
                        className='text-white uppercase text-md lg:text-lg'/>
                    <img src={Arrow} alt="Arrow Icon" className='text-lg'/>
                </div>
                <div
                    className='text-gray text-sm text-center mt-10 md:w-full md:text-end md:row-start-3 md:col-start-2 md:mt-20 lg:col-start-3 lg:text-lg'>
                    Copyright 2019. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer;