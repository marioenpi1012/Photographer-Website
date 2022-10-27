import React from 'react';
import Arrow from '../images/shared/desktop/arrow-white.svg';
import BlackArrow from '../images/shared/desktop/arrow.svg';
import { LandingInterface } from '../Interfaces'
const Landing :React.FC<LandingInterface> = ({
    heading,
    images,
    description,
    subheading,
    date,
    creatorName,
    buttonValue,
    dark,
    accent,
    id
}) => {
    return (
        <section
            className={`flex flex-col flex-nowrap md:items-center ${id % 2 === 0 ? 'md:flex-row-reverse': 'md:flex-row'}`}>
            <picture className='md:h-[65rem] md:w-[35.547%] xl:w-[57.639%]' >
                <source media='(min-width:1440px)' srcSet={images[2]}/>
                <source media='(min-width:768px)' srcSet={images[1]}/>
                <img src={images[0]} className='w-full h-full object-cover object-center' loading='lazy'/>
            </picture>
            <div className={`relative ${dark ? 'bg-black' :'bg-white'} w-full pt-0 pl-12 pr-9 pb-28 md:justify-center min-h-[41.9rem]
                md:h-[65rem] md:w-[64.453%] md:p-0 md:flex md:items-center xl:w-[42.316%]`}>
                {accent && <div className=' accent absolute top-0 w-44 h-2 md:top-auto md:left-0 md:w-1 md:h-[26rem]'></div>}
                <div className='relative pt-28 md:py-0 md:pl-[5.4rem] pr-24  md:items-center flex-col'>
                    {subheading && <div className="text-white">{subheading}</div>}
                    <h1
                        className={`${dark
                            ? 'text-white'
                            : 'text-black'} uppercase font-bold text-6xl md:max-w-[38.7rem] md:text-[4rem] tracking-wider
                        `}>{heading}</h1>
                    {
                        date && <div className='flex flex-row'>
                                <span className="text-gray capitalize">
                                    {date}
                                </span>
                                <span className="text-white">
                                    by {creatorName}
                                </span>
                            </div>
                    }
                    <p
                        className={`${dark
                            ? 'text-white'
                            : 'text-black'} opacity-60 text-2xl w-full mt-6 mb-9 md:max-w-[38.7rem]`}>{description}</p>
                    {
                        buttonValue && <div
                                className={`${dark
                                    ? 'text-white'
                                    : 'text-black'} flex flex-row space-x-6`}>
                                <input type='button' value={buttonValue} className='uppercase'/>
                                <img
                                    src={dark
                                        ? Arrow
                                        : BlackArrow}
                                    alt=""/>
                            </div>
                    }
                </div>
            </div>

        </section>
    )
}

export default Landing;