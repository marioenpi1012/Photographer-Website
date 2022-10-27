import {NavLink} from 'react-router-dom';
import Logo from '../images/shared/desktop/logo.svg'
import CloseIcon from '../images/shared/mobile/close.svg'
import MenuIcon from '../images/shared/mobile/menu.svg'
import React, { useState } from 'react';
const Nav :React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <header className=' h-20 bg-white md:overflow-hidden'>
            <section className='relative flex flex-row w-screen h-full justify-between items-center px-8 md:justify-around md:px-12 xl:px-40'>
                <div>
                    <NavLink to='/'>
                        <img src={Logo} alt="Website Logo" className='text-white'/>
                    </NavLink>
                </div>
                <div className=' cursor-pointer md:hidden' onClick={() => setNavOpen(!navOpen)}>
                    {
                        navOpen
                            ? <img src={CloseIcon} alt="Close Icon"/>
                            : <img src={MenuIcon} alt="Menu Button"/>
                    }
                </div>
                <nav className={`${navOpen ? '' : 'hidden'} absolute z-10 bg-white top-20 left-0 w-full py-10 text-center font-bold uppercase text-base 
                    md:flex md:relative md:top-0 md:left-0 md:py-0 md:justify-around md:items-center`}>
                    <ul className='flex flex-col h-full justify-center space-y-4 md:w-full md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                        <li>
                            <NavLink to='/stories'>
                                Stories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='features'>
                                features    
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/pricing'>
                                pricing        
                            </NavLink>
                        </li>
                    </ul>
                    <div className=' border border-gray w-4/5 mx-auto my-6 md:hidden'  />
                    <input type="button" value="get an invite" className='bg-black uppercase text-white w-4/5 mx-auto h-10 md:w-44 md:mx-0' />
                </nav>
            </section>
        </header>
    )
}

export default Nav;