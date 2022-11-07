import React from "react";
import { motion } from 'framer-motion'
import { ChildrenComponent } from '../Interfaces'
const AnimatedComponent:React.FC<ChildrenComponent> = ({children}) =>{
    return(
        <motion.main
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
        >
            {children}
        </motion.main>
    )
}

export default AnimatedComponent;