import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AppDetailsPage from './pages/AppDetailsPage'
import AppsPage from './pages/AppsPage'
import HomePage from './pages/HomePage'
import InstallationPage from './pages/InstallationPage'
import NotFoundPage from './pages/NotFoundPage'
import { LoadingProvider } from './context/LoadingContext'

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/:id" element={<AppDetailsPage />} />
          <Route path="/installation" element={<InstallationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LoadingProvider>
  )
}

export default App
