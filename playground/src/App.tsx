import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GitForkReact from '../../src'
import Footer from './components/Footer'
import routes from '~react-pages'
export default function App() {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
      <GitForkReact link="https://github.com/Simon-He95"
        type="trapeziumType"
        position="right"
        color="red" />
      <GitForkReact link="https://github.com/Simon-He95" position="right" />
      <GitForkReact
        link="https://github.com/Simon-He95"
        type="ribbons"
        position="left"
      />
      <Footer />
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
