import { WhatsAppIcon, SparkleIcon } from './icons.jsx'
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../config/site.js'
import { API_BASE_URL } from '../services/appointmentService.js'
import './BookingSection.css'

/**
 * BookingSection (a.k.a. AppointmentPreview)
 * ------------------------------------------
 * Sección pensada para el FUTURO sistema de citas online.
 *
 * ESTADO ACTUAL: mensaje de invitación a agendar + botón de WhatsApp.
 *
 * CÓMO EVOLUCIONARLO (sin rehacer la página):
 *   1. Configura VITE_API_BASE_URL en un archivo .env.
 *   2. Descomenta/implementa el formulario de citas usando las funciones de
 *      ../services/appointmentService.js:
 *        - getServices()          → poblar un <select> de servicios
 *        - getAvailableDates()    → poblar fechas disponibles
 *        - getAvailableSlots()    → poblar horarios disponibles
 *        - createAppointment()    → enviar la cita al backend
 *   3. Al confirmar, puedes redirigir a WhatsApp con buildWhatsAppLink()
 *      para mandar el resumen de la cita.
 *
 * La bandera `bookingEnabled` de abajo ya deja "cableada" la lógica:
 * en cuanto exista API_BASE_URL, esta sección puede renderizar el formulario.
 */
const bookingEnabled = Boolean(API_BASE_URL)

export default function BookingSection() {
  const whatsappLink = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)

  return (
    <section className="section booking" id="agendar">
      <div className="container">
        <div className="booking__card">
          <span className="booking__badge">
            <SparkleIcon className="booking__badge-icon" />
            Agenda tu cita
          </span>

          {bookingEnabled ? (
            /* 🔌 FUTURO: aquí se montará el formulario de citas conectado al backend.
               Placeholder para no romper la UI si alguien activa el flag sin implementar aún. */
            <BookingPlaceholderOnline />
          ) : (
            <>
              <h2 className="booking__title">
                ¿Lista para lucir unas increíbles?
              </h2>
              <p className="booking__text">
                Escríbenos por WhatsApp y te ayudamos a elegir tu diseño ideal.
                Te confirmamos fecha y horario con gusto.
              </p>
            </>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--lg booking__cta"
          >
            <WhatsAppIcon className="btn__icon" />
            Agendar por WhatsApp
          </a>

          <ul className="booking__steps">
            <li>
              <span className="booking__step-num">1</span>
              Escríbenos por WhatsApp
            </li>
            <li>
              <span className="booking__step-num">2</span>
              Elige servicio, fecha y hora
            </li>
            <li>
              <span className="booking__step-num">3</span>
              ¡Listo! Te esperamos ✨
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * Marcador de posición para el futuro formulario online.
 * Se muestra solo si se activa el backend antes de implementar el formulario.
 */
function BookingPlaceholderOnline() {
  return (
    <>
      <h2 className="booking__title">Agenda tu cita en línea</h2>
      <p className="booking__text">
        {/* TODO: Reemplazar por el formulario real (servicio → fecha → horario → datos). */}
        El sistema de citas está conectado. Formulario de reservas en
        construcción; por ahora confirma tu cita por WhatsApp.
      </p>
    </>
  )
}
