import {createRootRoute,Outlet} from "@tanstack/react-router"
import {TanStackRouterDevtools} from "@tanstack/router-devtools"
import ComponentOne from "../contextlearn/ComponentOne"
import ComponentTwo from "../contextlearn/ComponentTwo"
import { NameContext } from "../contextlearn/context"
import { useState } from "react"




export const Route  = createRootRoute({
    component:()=>{
        const nameHook = useState<string>("");
        return (
            <>
            <NameContext.Provider value={nameHook}>
                <ComponentOne/>
                <ComponentTwo/> 
                <Outlet/>
            </NameContext.Provider>
            <TanStackRouterDevtools/>
        </>
    )
    }
})