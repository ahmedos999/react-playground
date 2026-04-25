import { useState } from "react"
import ChildMemo from "./childMemo"

const ParentMemo =()=>{
    const [count,setCount] = useState(1)
    const [count2,setCount2] = useState(1)
    return<>
        <ChildMemo count={count2}/>
        <div>hi am the memo parent {count}</div>
        <button onClick={()=>setCount(prev => prev + 1)}>increment</button>
        <button onClick={()=>setCount2(prev => prev + 1)}>increment2</button>
    </>
}

export default ParentMemo