import React, { useState } from "react";
import { CardInterface } from '../Interfaces'
import Card from "./Card";
const Cards:React.FC = () =>{
    const CardsData:Array<CardInterface> = [
        {
            id:0,
            heading:'Basic',
            description:"Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            price:[19,190],
            subheading:['month','year'],
            accent:false,
            dark:false
        },
        {
            id:1,
            heading:'Pro',
            description:"More advanced features available. Recommended for photography veterans and professionals",
            price:[39,390],
            subheading:['month','year'],
            accent:true,
            dark:true
        },
        {
            id:2,
            heading:'Business',
            description:"Additional features available such as more detailed metrics. Recommended for business owners.",
            price:[99,990],
            subheading:['month','year'],
            accent:false,
            dark:false
        },
    ]
    const [priceIndex, setPriceIndex] = useState(false)
    return(
        <section className="flex justify-center items-center flex-col py-24 px-12">
            <div className="inline-flex items-center mb-16">
                <span className="text-3xl font-bold">Monthly</span>
                <label className="switch mx-14">
                    <input type="checkbox"/>
                    <span className="slider round" onClick={()=>setPriceIndex(!priceIndex)}></span>
                </label>
                <span className="text-3xl font-bold">Yearly</span>
            </div>
            <div className="max-w-[119rem] lg:flex flex-row items-center lg:gap-10">
                {
                    CardsData.map((card)=>(
                        <Card 
                            key={card.id}
                            id={card.id}
                            heading={card.heading}
                            description={card.description}
                            price={card.price}
                            subheading={card.subheading}
                            dark={card.dark}
                            accent={card.accent}
                            priceIndex={priceIndex}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Cards