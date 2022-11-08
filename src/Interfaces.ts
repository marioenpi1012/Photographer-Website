export interface LandingInterface {
    id:number,
    image:string,
    heading:string,
    subheading?:string,
    date?:string,
    description:string,
    buttonValue?:string,
    accent?:boolean,
    dark?:boolean,
    creatorName?:string,
}

export interface StoriesInterface{
    id:number,
    images:string,
    heading:string,
    subheading:string,
    
}

export interface BackgroundImageInterface{
    image:string,
    imageUrl:string,
}

export interface CardInterface {
    id:number,
    heading:string,
    description:string,
    price:number[],
    subheading:string[],
    dark:boolean,
    accent:boolean
}

export interface CompareInterface {
    id:number,
    heading:string,
    basic:boolean,
    pro:boolean,
    business:boolean
}
export interface ChildrenComponent{
    children:React.ReactNode
}