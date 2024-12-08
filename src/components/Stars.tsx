import { Star } from "./star"

export function Stars ({ count }: starsProps ){
    const lengthArray = count > 0 && count < 5 ? count: 0
    const starsArray = Array(lengthArray).fill(Star)
    console.log(starsArray)
    return (
        <>
            {
                starsArray.map(() => <Star/>)
            }
        </> 
    )    
}

interface starsProps{
    count: number 
}