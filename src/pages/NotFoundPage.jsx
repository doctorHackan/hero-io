import { Link } from 'react-router-dom'
import errorImage from '../assignment-assets/error-404.png'

function NotFoundPage() {
  return (
    <section className="container not-found-page">
      <img src={errorImage} alt="Page not found" className="not-found-image" />
      <h1 className="section-title">Oops! Page Not Found</h1>
      <p className="section-subtitle">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
    </section>
  )
}

export default NotFoundPage