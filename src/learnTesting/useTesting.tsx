import { useEffect, useState } from "react"

export const useTesting = ()=>{
    const [test,setTest] = useState('init value')

    useEffect(()=>{
        setTest('second value')
    },[])


    return test
}