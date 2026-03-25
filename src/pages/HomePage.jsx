import { Link } from 'react-router-dom'
import AppCard from '../components/AppCard'
import heroImage from '../assignment-assets/hero.png'
import { appsData } from '../data/appsData'

const topApps = appsData.slice(0, 8)

function HomePage() {
  return (
    <div className="container home-page">
      <section className="hero-banner">
        <img src={heroImage} alt="Hero illustration" className="hero-banner-image" />
        <h1 className="section-title">Find The Best Mobile Apps For Everyday Needs</h1>
        <p className="section-subtitle">
          Browse trusted apps, check ratings, and pick the perfect one in seconds.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            App Store
          </a>
          <a
            className="btn btn-outline"
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noreferrer"
          >
            Play Store
          </a>
        </div>
      </section>

      <section className="state-grid">
        <article className="state-card">
          <h2>12+</h2>
          <p>Premium Apps</p>
        </article>
        <article className="state-card">
          <h2>1M+</h2>
          <p>Total Downloads</p>
        </article>
        <article className="state-card">
          <h2>4.6</h2>
          <p>Average Rating</p>
        </article>
      </section>

      <section>
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Top Apps</h2>
            <p className="section-subtitle">Most loved and downloaded picks for this week.</p>
          </div>
          <Link to="/apps" className="btn btn-outline">
            Show All
          </Link>
        </div>

        <div className="card-grid">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage