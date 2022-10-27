export interface LandingInterface {
    id:number,
    images:string[],
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