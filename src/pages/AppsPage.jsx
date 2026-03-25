import { useEffect, useMemo, useState } from 'react'
import AppCard from '../components/AppCard'
import { appsData } from '../data/appsData'

function AppsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('default')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    setIsSearching(true)

    const timeoutId = setTimeout(() => {
      setIsSearching(false)
    }, 350)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, sortOrder])

  const visibleApps = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase()

    const filtered = appsData.filter((app) => app.title.toLowerCase().includes(normalized))

    if (sortOrder === 'high-low') {
      return [...filtered].sort((appA, appB) => appB.downloads - appA.downloads)
    }

    if (sortOrder === 'low-high') {
      return [...filtered].sort((appA, appB) => appA.downloads - appB.downloads)
    }

    return filtered
  }, [searchTerm, sortOrder])

  return (
    <section className="container apps-page">
      <h1 className="section-title">All Apps</h1>
      <p className="section-subtitle">
        Explore {appsData.length} curated apps and find the perfect one for your needs.
      </p>

      <div className="apps-controls">
        <p className="apps-count">Total Apps: {appsData.length}</p>

        <div className="apps-filters">
          <input
            type="text"
            className="search-input"
            placeholder="Search by app title..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            className="sort-select"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="default">Sort by Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      {isSearching ? (
        <div className="loading-box">Searching apps...</div>
      ) : visibleApps.length > 0 ? (
        <div className="card-grid">
          {visibleApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="no-data-box">No App Found</div>
      )}
    </section>
  )
}

export default AppsPage