import React from "react";
import { CardInterface } from "../Interfaces";
interface props{
    priceIndex:boolean
}
type newProps =  CardInterface & props;
const Card:React.FC<newProps> = ({id, heading, description, price, subheading, accent, dark, priceIndex}) =>{
    return (
        <div className={`${dark ? 'my-10 bg-black text-white ' : 'bg-dark-gray text-black'} 
            relative grid text-center pt-[5.6rem] pr-[3.6rem] pb-16 pl-[3.7rem]  md:gap-12
            md:grid-cols-2 ${id % 2 == 0 ? 'lg:h-[40.7rem]' : 'lg:h-[47rem]'} lg:grid-cols-1
            `}>
            {
                accent && <div className = ' accent absolute top-0 w-full h-2' > </div>
            }
            <div>
                <h1 className='text-4xl mb-7 font-bold'>{heading}</h1>
                <p className='text-2xl opacity-60'>{description}</p>
            </div>
            <div className='my-16 md:text-right md:my-0 md:mr-0 md:ml-auto lg:text-center lg:mx-auto'>
                <span className='text-6xl font-bold'> ${ price[priceIndex ? 1 : 0].toFixed(2) }</span>
                <p className='text-xl opacity-60'>per {subheading[priceIndex ? 1 : 0]}</p>
            </div>
            <input type="button" value="Pick Plan" className={`${dark ? 'text-black bg-white' : 'text-white bg-black'} uppercase w-full h-16 cursor-pointer`} />
        </div>
    )
}

export default Card