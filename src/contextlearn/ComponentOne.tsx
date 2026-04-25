import { useContext } from "react";
import { NameContext } from "./context";

export default function ComponentOne(){

    const [name] = useContext(NameContext);
    
    return (
        <>
            <h1>Show State</h1>
            <div>{name}</div>
        </>
    )
}