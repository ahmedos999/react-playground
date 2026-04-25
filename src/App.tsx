import { useContext, useState } from 'react'
import Parent from './Parent'
import ParentMemo from './memochildlearn/ParentMemo'
import ParentCall from './callback/parentcall'
import ParentProps from './propsChild/parentProps'
import ChildProps from './propsChild/childProps'
import ComponentOne from './contextlearn/ComponentOne'
import ComponentTwo from './contextlearn/ComponentTwo'
import { NameContext } from './contextlearn/context'

function App() {
  const [count, setCount] = useState(0)

  const nameHook = useState<string>("");

  return (
    <>
      {/* <Parent/> */}
      {/* <ParentMemo/> */}
      {/* <ParentCall/> */}
      {/* <ParentProps children={<ChildProps count={count} />}/> */}
    <NameContext.Provider value={nameHook}>
      <ComponentOne/>
      <ComponentTwo/> 
    </NameContext.Provider>
    </>
  )
}

export default App
