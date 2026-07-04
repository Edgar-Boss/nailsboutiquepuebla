import { WhatsAppIcon } from './icons.jsx'
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../config/site.js'
import './WhatsAppFloat.css'

/** Botón flotante de WhatsApp, fijo en la esquina inferior derecha. */
export default function WhatsAppFloat() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Agendar por WhatsApp"
    >
      <span className="wa-float__pulse" aria-hidden="true" />
      <WhatsAppIcon className="wa-float__icon" />
      <span className="wa-float__label">Agendar cita</span>
    </a>
  )
}
