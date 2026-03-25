import heroImage from '../assignment-assets/hero.png'

function HomePage() {
  return (
    <section className="container">
      <div className="hero-banner">
        <img src={heroImage} alt="Hero illustration" className="hero-banner-image" />
        <h1 className="section-title">Find The Best Mobile Apps For Everyday Needs</h1>
        <p className="section-subtitle">
          Browse trusted apps, check ratings, and pick the perfect one in seconds.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
            App Store
          </a>
          <a className="btn btn-outline" href="https://play.google.com/store/games" target="_blank" rel="noreferrer">
            Play Store
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage