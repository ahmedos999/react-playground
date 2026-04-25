import { useCallback, useState } from "react"
import Childcall from "./childcall"

const allusers = [
    'jhin',
    'ashe',
    'draven',
    'somlder'
]

const ParentCall = () =>{
    const [users,setUsers] = useState(allusers)

    const handleSearch = useCallback((text:string) =>{
        const filterUsers = allusers.filter((user)=>{
           return user.includes(text)
        })

        setUsers(filterUsers)
    },[])

    const shuffle = (array:string[])=>{
        const arr = [...array]; // optional: copy to avoid mutating original
  
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            // swap elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }


    return<>
    <button onClick={()=> setUsers(shuffle(users))}>shuffel</button>
    <Childcall search={handleSearch} />
    <ul>
        {users.map((user)=>(
            <div key={user}>{user}</div>
        ))}
    </ul>
    </>
}

export default ParentCall