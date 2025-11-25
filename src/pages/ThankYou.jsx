import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext.jsx'
import './ThankYou.css'

export default function ThankYou() {
  const { t } = useLanguage()

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="thank-you-content">
          <div className="thank-you-icon">✓</div>
          <h1>{t('thankYouTitle')}</h1>
          <p>{t('thankYouPageMessage')}</p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

