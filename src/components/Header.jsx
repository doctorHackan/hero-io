import { NavLink } from 'react-router-dom'
import logo from '../assignment-assets/logo.png'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Hero IO logo" width="42" height="42" />
          <span>Hero IO Store</span>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => (isActive ? 'active' : '')}>
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Installation
          </NavLink>
        </nav>

        <a
          className="btn btn-primary contribution-btn"
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
        >
          Contribution
        </a>
      </div>
    </header>
  )
}

export default Header