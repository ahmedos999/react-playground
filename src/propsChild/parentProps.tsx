import { useState } from "react"
import ChildProps from "./childProps"

type ParentPropsProps = {
    children:React.ReactNode 
}

const ParentProps = ({children}:ParentPropsProps) =>{
    const [counter,setCounter] = useState<number>(1)
    return <>
        <h1>Hi am props father</h1>
        <div>{counter}</div>
        <button onClick={()=>setCounter(prev => prev + 1)}>Increment</button>
        {children}
    </>
}

export default ParentProps