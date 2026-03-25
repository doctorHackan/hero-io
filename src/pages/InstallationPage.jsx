import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import AppCard from '../components/AppCard'
import { appsData } from '../data/appsData'

const STORAGE_KEY = 'hero-installed-apps'

function InstallationPage() {
  const [installedIds, setInstalledIds] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const installedApps = useMemo(
    () => appsData.filter((app) => installedIds.includes(app.id)),
    [installedIds]
  )

  const handleUninstall = (appId, appTitle) => {
    const nextInstalled = installedIds.filter((id) => id !== appId)
    setInstalledIds(nextInstalled)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextInstalled))
    toast.success(`${appTitle} uninstalled successfully`)
  }

  return (
    <section className="container installation-page">
      <h1 className="section-title">My Installation</h1>
      <p className="section-subtitle">Apps you have installed and can manage.</p>

      {installedApps.length > 0 ? (
        <>
          <p className="installed-count">Total Installed: {installedApps.length}</p>
          <div className="installed-grid">
            {installedApps.map((app) => (
              <article key={app.id} className="installed-card">
                <img src={app.image} alt={app.title} className="installed-cover" />
                <div className="installed-content">
                  <h3>{app.title}</h3>
                  <p className="company-name">{app.companyName}</p>
                  <div className="app-meta">
                    <span>{app.downloads.toLocaleString()} downloads</span>
                    <span>{app.ratingAvg} ★</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline uninstall-btn"
                    onClick={() => handleUninstall(app.id, app.title)}
                  >
                    Uninstall
                  </button>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="no-installations-box">
          <p>No apps installed yet. Visit the Apps page to find and install your favorite apps.</p>
        </div>
      )}
    </section>
  )
}

export default InstallationPage