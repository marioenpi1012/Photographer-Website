import React from 'react'
import { imagesUrls } from '../data/imagesUrl';
// import Responsive from  '../images/features/desktop/responsive.svg'
// import Infinity from '../images/features/desktop/no-limit.svg'
// import Embed from '../images/features/desktop/embed.svg'
const Features :React.FC = () =>{
    const featuresData = [
        {
            id:0,
            image:'responsive',
            heading:'100% Responsive',
            description:"No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
        },
        {
            id:1,
            image:'no-limit',
            heading:'No Photo Upload Limit',
            description:'Our tool has no limits on bandwidth. Freely upload in bulk and share all of your stories in one go.'
        },
        {
            id:2,
            image:'embed',
            heading:'Available to Embed',
            description:'Embed Tweets, Facebook post, Instagram media, Vimeo or Youtube videos, Google Maps, and more.'
        },
        {
            id:3,
            image:'custom-domain',
            heading:'Custom Domain',
            description:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
        },
        {
            id:4,
            image:'boost-exposure',
            heading:'Boost Your Exposure',
            description:"Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
        },
        {
            id:5,
            image:'drag-drop',
            heading:'Darg & Drop Image',
            description:"Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
        },
    ]
    return(
        <section className=' px-10 mx-auto max-w-[119rem]'>
            <ul className='grid justify-items-center text-center h-full w-full py-32 my-16 gap-24 md:grid-cols-2 md:px-16 md:py-48 lg:grid-cols-3 lg:flex-row'>
            {
                featuresData.map((feature)=>(
                    <li key={feature.id} className=' w-full h-full md:max-w-[45.7rem] md:mx-auto'>
                        <div className='mb-16 md:flex md:justify-center md:items-center md:h-36 lg:mb-[4.8rem]'>
                            <img src={`${process.env.PUBLIC_URL}${imagesUrls.FEATURES}desktop/${feature.image}.svg`} alt="Feature image"  className='mx-auto ' />
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