import {NavLink} from 'react-router-dom';
import React, { useState } from 'react';
const Nav :React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)
    if(navOpen) document.body.style.overflow = 'hidden' 
    else document.body.style.overflow = 'unset'
    return (
        <header className=' h-28 bg-white md:overflow-hidden'>
            <section className='relative flex flex-row max-w-[119rem] mx-auto w-screen h-full justify-between items-center px-8 md:justify-around md:px-12 xl:px-40'>
                <div>
                    <NavLink to='/'>
                        <img src={process.env.PUBLIC_URL + '/images/shared/desktop/logo.svg'} alt="Website Logo" className='text-white'/>
                    </NavLink>
                </div>
                <div className=' cursor-pointer md:hidden' onClick={() => setNavOpen(!navOpen)}>
                    {
                        navOpen
                            ? <img src={process.env.PUBLIC_URL + '/images/shared/mobile/close.svg'} alt="Close Icon" className='w-full h-4'/>
                            : <img src={process.env.PUBLIC_URL + '/images/shared/mobile/menu.svg'} alt="Menu Button" className='w-full h-4'/>
                    }
                </div>
                <nav className={`${navOpen ? '' : 'hidden'} absolute z-10 bg-white top-20 left-0 w-full py-10 text-center font-bold uppercase text-base 
                    md:flex md:relative md:top-0 md:left-0 md:py-0 md:justify-around md:items-center`}>
                    <ul className='flex flex-col h-full justify-center space-y-4 md:w-full md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                        <li className='transition-all duration-300 ease-in-out hover:text-gray '>
                            <NavLink to='/stories'>
                                Stories
                            </NavLink>
                        </li>
                        <li className='transition-all duration-300 ease-in-out hover:text-gray '>
                            <NavLink to='features'>
                                features    
                            </NavLink>
                        </li>
                        <li className='transition-all duration-300 ease-in-out hover:text-gray '>
                            <NavLink to='/pricing'>
                                pricing        
                            </NavLink>
                        </li>
                    </ul>
                    <div className=' border border-gray w-4/5 mx-auto my-6 md:hidden'  />
                    <input type="button" value="get an invite" 
                        className='bg-black uppercase text-white w-4/5 mx-auto h-10 md:w-44 md:mx-0 hover:bg-gray hover:text-black ease-in-out duration-300' />
                </nav>
            </section>
        </header>
    )
}

export default Nav;