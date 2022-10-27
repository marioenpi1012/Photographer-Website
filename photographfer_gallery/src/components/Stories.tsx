import React from 'react';
import Arrow from '../images/shared/desktop/arrow-white.svg';
import { Images } from '../data/imagesName';
import { StoriesInterface } from '../Interfaces'
const Stories: React.FC = () =>{
    const mobile = '/src/images/stories/mobile'
    const desktop = '/src/images/stories/desktop'
    const storiesData: Array<StoriesInterface> = [
        {
            id:0,
            images:"mountains",
            heading:'The Mountains',
            subheading:'John Appleseed'
        }
        // ,{
        //     id:1,
        //     images:['bg-mobile-sunset','md:desktop-sunset'],
        //     heading:'Sunset cityscapes',
        //     subheading:'Benjamin Cruz'
        // },{
        //     id:2,
        //     images:['bg-mobile-18-days','md:desktop-18-days'],
        //     heading:'18 Days Vogage',
        //     subheading:'Alexei Borodin'
        // },{
        //     id:3,
        //     images:['bg-mobile-architecturals','md:desktop-architecturals'],
        //     heading:'Architecturals',
        //     subheading:'Semantha Brooks'
        // },{
        //     id:4,
        //     images:[]
        // }
    ]
    return(
        <section className='w-full h-full md:grid md:grid-cols-2 lg:grid-cols-4 '>
            { storiesData && 
                storiesData.map((story)=>(
                        <div className={`bg-[url('/src/images/stories/mobile/mountains.jpg')] bg-cover bg-no-repeat h-96`}>
                        </div>

                    // <div key={story.id} className={`relative ${story.images.map((img) => img).join(' ')} cursor-pointer bg-cover bg-no-repeat bg-center w-full h-[37.5rem] md:h-[50rem]`}>
                    //         <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.65)]'></div>
                    //         <div className='absolute bottom-0 px-8 pb-6 text-white h-auto w-full space-y-2'> 
                    //             <h1 className='capitalize font-semibold text-3xl'>{story.heading}</h1>
                    //             <div className='font-medium text-xl'>by {story.subheading}</div>
                    //             <div className='border border-white w-full opacity-25'></div>
                    //             <div className='flex flex-row cursor-pointer w-full justify-between py-3  '>
                    //                 <input type="button" value='read story' className='uppercase font-bold text-lg ' />
                    //                 <img src={Arrow} alt=""  />
                    //             </div>
                    //         </div>
                    // </div>
                ))
            }
        </section>
    )
}

export default Stories;