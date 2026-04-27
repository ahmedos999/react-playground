import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ()=>{
    let isAuthticated  =  false 

    if( !isAuthticated ){
      alert('Access denied')
      throw redirect({
        to: '/'
      })
    }
  },
  component: () => <div>Hello /dashboard!</div>,
})
