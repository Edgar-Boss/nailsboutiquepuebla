import { useReveal } from '../hooks/useReveal.js'
import { WhatsAppIcon } from './icons.jsx'
import { buildWhatsAppLink } from '../config/site.js'
import './Services.css'

/**
 * Servicios que se muestran como tarjetas.
 * Los ids coinciden con los del appointmentService (MOCK_SERVICES) para que,
 * cuando exista el backend de citas, se pueda enlazar cada tarjeta a su servicio.
 */
const SERVICES = [
  {
    id: 1,
    emoji: '💅',
    title: 'Uñas acrílicas',
    description:
      'Extensiones resistentes y con la forma que más te gusta: coffin, almendra, stiletto y más.',
    featured: true,
  },
  {
    id: 2,
    emoji: '💎',
    title: 'Cristal Swarovski',
    description:
      'Nuestra especialidad. Aplicación de cristal Swarovski para un acabado con brillo único.',
    featured: true,
  },
  {
    id: 3,
    emoji: '🤍',
    title: 'Manicure',
    description:
      'Cuidado completo de manos y cutícula para lucir uñas sanas, prolijas y elegantes.',
  },
  {
    id: 4,
    emoji: '🦶',
    title: 'Pedicure',
    description:
      'Consiente tus pies con un pedicure relajante y un acabado impecable.',
  },
  {
    id: 5,
    emoji: '✨',
    title: 'Gelish',
    description:
      'Color intenso y duradero con acabado brillante que se mantiene perfecto por semanas.',
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Lo que hacemos</span>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-subtitle">
            Diseños elegantes y personalizados para cada ocasión.
          </p>
        </div>

        <div
          ref={ref}
          className={`services__grid reveal ${visible ? 'is-visible' : ''}`}
        >
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`service-card ${
                service.featured ? 'service-card--featured' : ''
              }`}
            >
              <span className="service-card__emoji" aria-hidden="true">
                {service.emoji}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <a
                href={buildWhatsAppLink(
                  `¡Hola! Me interesa el servicio de ${service.title}. ¿Me puedes dar información? 💅`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card__link"
              >
                <WhatsAppIcon className="service-card__link-icon" />
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
