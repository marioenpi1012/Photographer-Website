import React from 'react'
import Responsive from  '../images/features/desktop/responsive.svg'
import Infinity from '../images/features/desktop/no-limit.svg'
import Embed from '../images/features/desktop/embed.svg'
const Features :React.FC = () =>{
    const featuresData = [
        {
            id:0,
            image:Responsive,
            heading:'100% Responsive',
            description:"No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
        },
        {
            id:1,
            image:Infinity,
            heading:'No Photo Upload Limit',
            description:'Our tool has no limits on bandwidth. Freely upload in bulk and share all of your stories in one go.'
        },
        {
            id:2,
            image:Embed,
            heading:'Available to Embed',
            description:'Embed Tweets, Facebook post, Instagram media, Vimeo or Youtube videos, Google Maps, and more.'
        }
    ]
    return(
        <section className=' px-10 mx-auto max-w-[119rem]'>
            <ul className='flex flex-col justify-items-center text-center h-full w-full py-32 my-16 gap-24 md:px-16 md:py-48  lg:flex-row'>
            {
                featuresData.map((feature)=>(
                    <li key={feature.id} className=' w-full h-full md:max-w-[45.7rem] md:mx-auto'>
                        <div className='mb-16 md:flex md:justify-center md:items-center md:h-36 lg:mb-[4.8rem]'>
                            <img src={feature.image} alt="Feature image"  className='mx-auto ' />
                        </div>
                        <h1 className='font-bold text-3xl text-black mb-6'>{feature.heading}</h1>
                        <p className='text-2xl text-center text-black opacity-60'>{feature.description}</p>
                    </li>
                ))
            }
            </ul>

        </section>
    )
}

export default Features;