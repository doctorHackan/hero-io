import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Link, useParams } from 'react-router-dom'
import appError from '../assignment-assets/App-Error.png'
import downloadsIcon from '../assignment-assets/icon-downloads.png'
import ratingsIcon from '../assignment-assets/icon-ratings.png'
import reviewsIcon from '../assignment-assets/icon-review.png'
import { appsData } from '../data/appsData'

const STORAGE_KEY = 'hero-installed-apps'

function AppDetailsPage() {
  const { id } = useParams()
  const appId = Number(id)

  const app = useMemo(() => appsData.find((item) => item.id === appId), [appId])

  const [installedIds, setInstalledIds] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  if (!app) {
    return (
      <section className="container no-app-details">
        <img src={appError} alt="App not found" className="no-app-image" />
        <h1 className="section-title">App Not Found</h1>
        <p className="section-subtitle">The app you are looking for is not available.</p>
        <Link to="/apps" className="btn btn-primary">
          Back To Apps
        </Link>
      </section>
    )
  }

  const isInstalled = installedIds.includes(app.id)

  const handleInstall = () => {
    if (isInstalled) {
      return
    }

    const nextInstalled = [...installedIds, app.id]
    setInstalledIds(nextInstalled)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextInstalled))
    toast.success(`${app.title} installed successfully`)
  }

  return (
    <section className="container details-page">
      <article className="details-hero">
        <img src={app.image} alt={app.title} className="details-cover" />

        <div className="details-info">
          <p className="details-company">{app.companyName}</p>
          <h1 className="section-title">{app.title}</h1>

          <div className="details-metrics">
            <div>
              <img src={ratingsIcon} alt="rating" width="18" height="18" />
              <span>{app.ratingAvg} / 5</span>
            </div>
            <div>
              <img src={downloadsIcon} alt="downloads" width="18" height="18" />
              <span>{app.downloads.toLocaleString()} downloads</span>
            </div>
            <div>
              <img src={reviewsIcon} alt="reviews" width="18" height="18" />
              <span>{app.reviews.toLocaleString()} reviews</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary install-btn"
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? 'Installed' : 'Install'}
          </button>
        </div>
      </article>

      <article className="chart-card">
        <h2 className="section-title">App Review Chart</h2>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={app.ratings} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {app.ratings.map((item) => (
                  <Cell key={item.name} fill="#2563eb" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="description-card">
        <h2 className="section-title">App Description</h2>
        <p className="section-subtitle">{app.description}</p>
        <p className="details-extra">
          App Size: <strong>{app.size} MB</strong>
        </p>
      </article>
    </section>
  )
}

export default AppDetailsPage