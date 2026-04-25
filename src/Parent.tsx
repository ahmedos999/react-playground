import { useMemo, useState } from "react"

const Parent = ()=>{

    const initItems =  new Array(2999999).fill(0).map((_,i)=>{
        return {
            id:i,
            isSelected: i === 2999998
        }
    })

    const [count,setCount] = useState(0)
    const [items] = useState(initItems)

    const selectItem = useMemo(()=>items.find((item)=>item.isSelected),[items])

    return<>
    <div>{count}</div>
    <div>{selectItem?.id}</div>
    <button onClick={()=>setCount(prev =>prev+1)}>increment</button>
    </>
}

export default Parent
