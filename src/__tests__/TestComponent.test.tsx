import { render } from '@testing-library/react'
import { test, expect } from 'vitest'
import TestComponent from '../learnTesting/TestComponent'

test('check if the component has a name', () => {
    const screen = render(<TestComponent />)

    const div = screen.getByRole("heading", { level: 2 })
    expect(div.id).toBe("2")
})