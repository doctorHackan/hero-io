function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-section">
          <h3>Hero IO Store</h3>
          <p>Discover and install curated apps that enhance your daily productivity and lifestyle.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/apps">Apps</a>
            </li>
            <li>
              <a href="/installation">My Installation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                Report Issue
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Hero IO Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer