import React from 'react';
import { Images } from '../data/imagesName';
import { StoriesInterface } from '../Interfaces'
import BackgroundImage from '../components/BackgroundImage';
import { imagesUrls } from '../data/imagesUrl'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const Stories: React.FC = () =>{
    const { pathname }  = useLocation()
    const storiesData: Array<StoriesInterface> = [
        {
            id:0,
            images: Images.THE_MOUNTAINS,
            heading:'The Mountains',
            subheading:'John Appleseed'
        }
        ,{
            id:1,
            images:Images.CITYSCAPES,
            heading:'Sunset cityscapes',
            subheading:'Benjamin Cruz'
        },
        {
            id:2,
            images:Images.DAYS_VOYAGE,
            heading:'18 Days Vogage',
            subheading:'Alexei Borodin'
        },
        {
            id:3,
            images:Images.ARCHITECTURALS,
            heading:'Architecturals',
            subheading:'Semantha Brooks'
        },
        {
            id:4,
            images:Images.WORLD_TOUR,
            heading:'World Tour 2019',
            subheading:'Timothy Wagner'
        },
        {
            id:5,
            images:Images.UNFORESEEN_CORNERS,
            heading:'Unforeseen Corners',
            subheading:'William Malcolm'
        },
        {
            id:6,
            images:Images.KING_ON_AFRICA,
            heading:'King on Africa: Part II',
            subheading:'Tim Hillenburg'
        },
        {
            id:7,
            images:Images.TRIP_TO_NOWHERE,
            heading:'The Trip tp Nowhere',
            subheading:'Felicia Rourke'
        },
        {
            id:8,
            images:Images.RAGE_OF_THE_SEA,
            heading:'Rage of The Sea',
            subheading:'Mohammed Abdul'
        },
        {
            id:9,
            images:Images.RUNNING_FREE,
            heading:'Running Free',
            subheading:'Michelle'
        },
        {
            id:10,
            images:Images.BEHIND_THE_WAVES,
            heading:'Behind the Waves',
            subheading:'Lamar Wilson'
        },
        {
            id:11,
            images:Images.CALM_WATERS,
            heading:'Calm Waters',
            subheading:'Samantha Brooke'
        },
        {
            id:12,
            images:Images.MILKY_WAY,
            heading:'The Milky Way',
            subheading:'Benjamin Cruz'
        },
        {
            id:13,
            images:Images.DARK_FOREST,
            heading:'Night at The Dark Forest',
            subheading:'Mohammed Abdul'
        },
        {
            id:14,
            images:Images.SOMWARPET,
            heading:"Somwarpet's Beauty",
            subheading:'Michelle'
        },
        {
            id:15,
            images:Images.LAND_OF_DREAMS,
            heading:'Land of Dreams',
            subheading:'Willian Malcolm'
        },
    ]
    const storiesRender = pathname === '/stories' ? storiesData :  storiesData.slice(0,4)
    const storyAnimation = {
        initial:{
            y:0
        },
        hover:{
            y:'-3%'
        }
    }
    return(
        <section className='w-full h-full md:grid md:grid-cols-2 lg:grid-cols-4 '>
            { 
                storiesRender.map((story,i)=>(
                    <motion.div 
                        key={story.id} 
                        className="relative group cursor-pointer w-full h-[37.5rem] md:h-[50rem]"
                        initial='initial'
                        whileHover='hover'
                        variants={storyAnimation}
                        transition={{duration:0.4}}
                        >
                            <div className="absolute top-0 left-0 w-full h-[37.5rem] md:h-[50rem]">
                                <BackgroundImage image={story.images} imageUrl={imagesUrls.STORIES} />
                            </div>
                            <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.65)]'></div>
                            <div className='absolute bottom-0 px-8 pb-6 text-white h-auto w-full space-y-2'> 
                                <h1 className='capitalize font-semibold text-3xl'>{story.heading}</h1>
                                <div className='font-medium text-xl'>by {story.subheading}</div>
                                <div className='border border-white w-full opacity-25'></div>
                                <div className='flex flex-row cursor-pointer w-full justify-between py-3  '>
                                    <input type="button" value='read story' className='uppercase font-bold text-lg ' />
                                    <img src={process.env.PUBLIC_URL + '/images/shared/desktop/arrow-white.svg'} alt=""  />
                                </div>
                            </div>
                            <div className=' accent hidden absolute bottom-0 w-full h-2 group-hover:flex' ></div>
                    </motion.div>
                ))
            }
        </section>
    )
}

export default Stories;