
import { useContext } from "react"
import { NameContext } from "./context"

export default function ComponentTwo(){

    const [name, setName] = useContext(NameContext);

    console.log(name)

    return (
        <>
            <h1>update State</h1>
            <button onClick={()=>{setName('Omer')}}>Click me</button>
        </>
    )
}