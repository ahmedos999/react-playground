import { memo } from "react"

type ChildMemoProps = {
    count:number
}

const ChildMemo = ({count}:ChildMemoProps)=>{
    console.log('Child reborn')
    return <>
        <div>Hi am Child Memo {count}</div>
    </>
}

export default memo(ChildMemo) 