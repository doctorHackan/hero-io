function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>Hero IO Store</h3>
          <p>Discover, install, and manage your favorite apps in one place.</p>
        </div>
        <p>© {new Date().getFullYear()} Hero IO Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer