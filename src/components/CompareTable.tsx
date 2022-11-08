import React from "react";
import { FaCheck } from 'react-icons/fa'
import { CompareInterface } from "../Interfaces";

const CompareTable:React.FC = () =>{
    const compareData:Array<CompareInterface> = [
        {
            id:0,
            heading:'Unlimited Story Posting',
            basic:true,
            pro:true,
            business:true
        },
        {
            id:1,
            heading:'Unlimited Story Posting',
            basic:true,
            pro:true,
            business:true
        },
        {
            id:2,
            heading:'Embedding Custom Content',
            basic:false,
            pro:true,
            business:true
        },
        {
            id:3,
            heading:'Customize Metadata',
            basic:false,
            pro:true,
            business:true
        },
        {
            id:4,
            heading:'Advanced Metrics',
            basic:false,
            pro:false,
            business:true
        },
        {
            id:5,
            heading:'Photo Downloads',
            basic:false,
            pro:false,
            business:true
        },
        {
            id:6,
            heading:'Search Engine indexing',
            basic:false,
            pro:false,
            business:true
        },
        {
            id:7,
            heading:'Custom Analytics',
            basic:false,
            pro:false,
            business:true
        },
    ]
    return(
        <section>
                <div className="max-w-[119rem] mx-auto px-10 mb-24 md:mb-44 md:max-w-[73.1rem] md:px-16">
                    <h1 className=" hidden text-5xl mb-6 uppercase">Compare</h1>
                    <div>
                        <div className="grid border-b-2 border-black pb-9 md:grid-cols-2 md:pt-0 md:pb-9 md:px-10  ">
                            <h2 className="uppercase text-xl mb-6">The Features</h2>
                            <div className="grid grid-cols-3 ">
                                <h2 className="text-xl uppercase mb-6 hidden md:flex">Basic</h2>
                                <h2 className="text-xl uppercase mb-6 hidden md:flex">Pro</h2>
                                <h2 className="text-xl uppercase mb-6 hidden md:flex">Business</h2>
                            </div>
                        </div>
                        {
                            compareData.map((data)=>(
                                <div className=" py-10 border-b-2 border-gray grid md:grid-cols-2 md:p-10" key={data.id}>
                                    <h2 className="text-xl mb-6 uppercase md:m-0">{data.heading}</h2>
                                    <div className="grid grid-cols-3">
                                        <div>
                                            <span className="text-base uppercase mb-3 opacity-50 md:hidden">Basic</span>
                                            {
                                                data.basic ? <FaCheck className=" h-5 w-6" /> : ''
                                            }
                                        </div>
                                        <div>
                                            <span className="text-base uppercase mb-3 opacity-50 md:hidden">Pro</span>
                                            {
                                                data.pro ? <FaCheck className=" h-5 w-6" /> : ''
                                            }
                                        </div>
                                        <div>
                                            <span className="text-base uppercase mb-3 opacity-50 md:hidden">Business</span>
                                            {
                                                data.business ? <FaCheck className=" h-5 w-6" /> : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    )
}

export default CompareTable