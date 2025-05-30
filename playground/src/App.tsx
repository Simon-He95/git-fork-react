import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '~react-pages'
import GitForkReact from '../../src'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
      <GitForkReact
        link="https://github.com/Simon-He95"
        type="trapeziumType"
        position="right"
        color="red"
      />
      <GitForkReact link="https://github.com/Simon-He95" position="left" />
      <GitForkReact
        link="https://github.com/Simon-He95"
        type="ribbons"
        position="left"
        top="100px"
      />
      <GitForkReact
        link="https://github.com/Simon-He95"
        type="ribbons"
        bottom="100px"
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
