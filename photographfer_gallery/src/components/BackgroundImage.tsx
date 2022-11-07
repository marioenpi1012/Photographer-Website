import React, { useEffect, useState } from 'react'
import mountains from '../images/stories/mobile/mountains.jpg'
import useCurrentScreen from '../hooks/useCurrentScreen'
import { BackgroundImageInterface } from '../Interfaces'
import  { imagesUrls }  from '../data/imagesUrl'
const BackgroundImage : React.FC<BackgroundImageInterface> = ({image, imageUrl}) =>{
    const [windowSize, setWidth] = useState(window.innerWidth)
    const [windowHeight, setHeight] = useState(window.innerHeight)
    let backgroundSize = useCurrentScreen(windowSize, windowHeight)
    useEffect(()=>{
        window.addEventListener("resize", CurrentScreen)
    },[backgroundSize])
    const CurrentScreen = ()=>{
        const width = window.innerWidth
        const height = window.innerHeight
        if(width < windowSize || width > windowSize){
            setWidth(width)
            setHeight(height)
        }
        backgroundSize = useCurrentScreen(windowSize, windowHeight)
        
        return backgroundSize
    }
    if(imageUrl === imagesUrls.STORIES && backgroundSize === 'tablet'){
        backgroundSize = 'desktop'
    }
    const imgUrl=`${imageUrl}${backgroundSize}/${image}.jpg`
    return(
        <div style={{backgroundImage:`url("${imgUrl}")`}} 
            className='bg-cover bg-center bg-no-repeat w-full h-full' >
        </div>
    )
}
// md:h-[65rem] md:w-[35.547%] xl:w-[57.639%]
export default BackgroundImage