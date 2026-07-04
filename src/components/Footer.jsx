import logo from '../assets/logo.png'
import { WhatsAppIcon, MapPinIcon } from './icons.jsx'
import { BUSINESS, buildWhatsAppLink } from '../config/site.js'
import './Footer.css'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappLink = buildWhatsAppLink()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-mark">
            <img src={logo} alt="Nails Boutique" className="footer__logo" />
          </div>
          <p className="footer__tagline">
            {BUSINESS.tagline}. Uñas acrílicas, Gelish y diseños con cristal
            Swarovski en {BUSINESS.city}.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <h4 className="footer__col-title">Explorar</h4>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <h4 className="footer__col-title">Contacto</h4>
          <p className="footer__contact-line">
            <MapPinIcon className="footer__contact-icon" />
            {BUSINESS.location.plaza}, {BUSINESS.city}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-line footer__contact-link"
          >
            <WhatsAppIcon className="footer__contact-icon" />
            {BUSINESS.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {year} {BUSINESS.name} · {BUSINESS.tagline}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
