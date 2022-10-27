import {useState, useEffect} from 'react';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width}
    return {width, height};
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [screenSize,setScreenSize] = useState()
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
            if(windowDimensions.width < 640) return setScreenSize('mobile')
            else if(windowDimensions.width > 640 && windowDimensions.width < 1024) return setScreenSize('tablet')
            else return setScreenSize('desktop')
            // return screenSize
        }

        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, [windowDimensions.width]);

    return screenSize
}