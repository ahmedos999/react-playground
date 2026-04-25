import  { memo } from "react"

interface ChildCallProps{
    search:(text:string)=>void
}

const ChildCall = ({search}:ChildCallProps) =>{

    console.log('child call rendered')
    return (
        <>
        <input
            type="text"
            placeholder="type the name here"
            onChange={(e)=>search(e.target.value)}
        />
        </>
    )
}

export default memo(ChildCall)