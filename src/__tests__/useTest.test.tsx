import {renderHook,waitFor} from "@testing-library/react"
import { expect, test } from "vitest"
import { useTesting } from "../learnTesting/useTesting"

test('testing custom hook ',async ()=>{
    const {result} = renderHook(() => useTesting())

    await waitFor(()=>{
        expect(result.current).toEqual('second value')
    })
})