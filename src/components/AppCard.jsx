import { Link } from 'react-router-dom'

function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="app-card-link">
      <article className="app-card">
        <img src={app.image} alt={app.title} className="app-cover" />
        <div className="app-card-content">
          <h3>{app.title}</h3>
          <div className="app-meta">
            <span>{app.downloads.toLocaleString()} downloads</span>
            <span>{app.ratingAvg} ★</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default AppCard