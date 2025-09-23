import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import './index.css'
import App, { Header, Footer } from './App.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToHash() {
  const { hash } = useLocation()
  React.useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])
  return null
}

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <ScrollToHash />
      {children}
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
