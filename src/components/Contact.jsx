import { useReveal } from '../hooks/useReveal.js'
import { WhatsAppIcon, MapPinIcon, ClockIcon } from './icons.jsx'
import { BUSINESS } from '../config/site.js'
import locationImg from '../assets/location.webp'
import './Contact.css'

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Visítanos</span>
          <h2 className="section-title">¿Dónde estamos?</h2>
          <p className="section-subtitle">
            Estamos dentro de {BUSINESS.location.plaza}, en el corazón de{' '}
            {BUSINESS.city}.
          </p>
        </div>

        <div
          ref={ref}
          className={`contact__grid reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Mapa / ubicación */}
          <a
            href={BUSINESS.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__map"
            aria-label="Ver ubicación en Google Maps"
          >
            <img
              src={locationImg}
              alt={`Ubicación de ${BUSINESS.name} en ${BUSINESS.location.plaza}`}
              loading="lazy"
            />
          </a>

          {/* Información */}
          <div className="contact__info">
            <div className="contact__block">
              <div className="contact__icon">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="contact__block-title">Ubicación</h3>
                <p>
                  Centro comercial <strong>{BUSINESS.location.plaza}</strong>.
                  <br />
                  {BUSINESS.location.reference}
                </p>
              </div>
            </div>

            <div className="contact__block">
              <div className="contact__icon">
                <ClockIcon />
              </div>
              <div>
                <h3 className="contact__block-title">Horario de atención</h3>
                <ul className="contact__hours">
                  {BUSINESS.schedule.map((s) => (
                    <li key={s.days}>
                      <span>{s.days}</span>
                      <span>{s.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact__block">
              <div className="contact__icon contact__icon--whatsapp">
                <WhatsAppIcon />
              </div>
              <div>
                <h3 className="contact__block-title">WhatsApp</h3>
                <p>Escríbenos y agenda tu cita al instante.</p>
                <p className="contact__phone">{BUSINESS.whatsappDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
