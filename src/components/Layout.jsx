import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Toaster position="top-right" />
      <Footer />
    </div>
  )
}

export default Layout