import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'
import Header from './Header'
import LoadingOverlay from './LoadingOverlay'
import { useLoading } from '../context/LoadingContext'

function Layout() {
  const location = useLocation()
  const { isLoading, setIsLoading } = useLoading()

  useEffect(() => {
    setIsLoading(true)
    const timeoutId = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timeoutId)
  }, [location.pathname, setIsLoading])

  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        {isLoading && <LoadingOverlay />}
        <Outlet />
      </main>
      <Toaster position="top-right" />
      <Footer />
    </div>
  )
}

export default Layout