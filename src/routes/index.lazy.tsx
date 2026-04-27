import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})

function HomePage(){
  return (
    <div>
      Knock on the door 
      <Link to={'/welcomePage'}>Knock here</Link>
    </div>
  )
}