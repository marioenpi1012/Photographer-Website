import React from 'react'
import Landing from '../components/Landing'
// import StoriesComponent from '../components/Stories'
import Arrow from '../images/shared/desktop/arrow-white.svg'
import {LandingInterface} from '../Interfaces'
import MobileMoon from '../images/stories/mobile/moon-of-appalacia.jpg'
import TabletMoon from '../images/stories/tablet/moon-of-appalacia.jpg'
import DesktopMoon from '../images/stories/desktop/moon-of-appalacia.jpg'
const Stories: React.FC = () => {
    const LandingData: LandingInterface = {
        id: 0,
        images: [
            MobileMoon, TabletMoon, DesktopMoon
        ],
        heading: 'Hazy full moon of appalachia',
        subheading: "last moth's features story",
        date: 'March 2nd 2022',
        description: 'The dissected plateau area, while not actually made up of geological mountains' +
                ', is popularly called "mountains," especially in eastern Kentucky and West Vir' +
                'ginia, and while the ridges are not high, the terrain is extremely rugged.',
        creatorName: 'John Appleseed'
    }

    const {
        id,
        images,
        heading,
        subheading,
        date,
        description,
        creatorName
    } = LandingData
    return (
        <main>
            <section key={id} className="relative flex flex-col flex-nowrap md:items-center">
                <picture className='md:h-[65rem]'>
                    <source media='(min-width:1024px)' srcSet={images[2]}/>
                    <source media='(min-width:768px)' srcSet={images[1]}/>
                    <img
                        src={images[0]}
                        className='w-full h-full object-cover object-center'
                        loading='lazy'/>
                </picture>
                <div
                    className="relative bg-black w-full pt-0 pl-12 pr-9 pb-28 md:absolute md:bg-transparent md:top-0 md:left-0 min-h-[41.9rem]
                md:h-[65rem] md:w-[64.453%] md:p-0 md:flex md:items-center xl:w-[42.316%]">
                    <div
                        className='relative pt-20 md:py-0 md:px-[3.9rem]  md:items-center flex-col'>
                        <div className="text-white mb-6 uppercase text-xl">{subheading}</div>
                        <h1
                            className="text-white uppercase font-bold text-6xl mb-6 md:max-w-[38.7rem] md:text-[4rem] md:pr-14 tracking-wider">{heading}</h1>
                        <div className='flex flex-row text-xl'>
                            <span className="text-white opacity-60 capitalize">
                                {date}
                            </span>
                            <span className="text-white ml-4 mb-6">
                                by {creatorName}
                            </span>
                        </div>
                        <p className="text-white opacity-60 text-2xl w-full mt-6 mb-9 md:mb-20 md:max-w-[38.7rem]">{description}</p>
                        <div className="text-white flex flex-row space-x-6">
                            <input type='button' value='Read the story' className='uppercase'/>
                            <img src={Arrow} alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            {/* <StoriesComponent/> */}
        </main>
    )
}

export default Stories