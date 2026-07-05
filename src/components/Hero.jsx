import heroImg from '../assets/unas-hero.webp'
import { WhatsAppIcon, SparkleIcon } from './icons.jsx'
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, BUSINESS } from '../config/site.js'
import './Hero.css'

export default function Hero() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)

  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <SparkleIcon className="hero__eyebrow-icon" />
            {BUSINESS.tagline}
          </span>

          <h1 className="hero__title">
            Uñas acrílicas, Gelish y diseños con cristal Swarovski
          </h1>

          <p className="hero__subtitle">
            Realza tu estilo con diseños elegantes, modernos y personalizados.
          </p>

          <div className="hero__actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
            >
              <WhatsAppIcon className="btn__icon" />
              Agendar cita por WhatsApp
            </a>
            <a href="#galeria" className="btn btn--outline btn--lg">
              Ver diseños
            </a>
          </div>

          <ul className="hero__badges">
            <li>💎 Cristal Swarovski</li>
            <li>💅 Diseños personalizados</li>
            <li>📍 {BUSINESS.location.plaza}</li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__image-wrap">
            <img
              src={heroImg}
              alt="Uñas con cristal Swarovski sobre fondo rosa elegante"
              className="hero__image"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div className="hero__glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
