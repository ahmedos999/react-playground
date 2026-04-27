import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/WelcomePage')({
  component: WelcomePage,
})

function WelcomePage() {
  return <div>Welcome the tanStack router</div>
}
