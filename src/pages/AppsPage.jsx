import { appsData } from '../data/appsData'

function AppsPage() {
  return (
    <section className="container">
      <h1 className="section-title">All Apps</h1>
      <p className="section-subtitle">Explore {appsData.length} curated apps for your daily life.</p>
    </section>
  )
}

export default AppsPage