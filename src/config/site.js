/**
 * Configuración central del negocio.
 * Todos los datos "editables" viven aquí para no tener que tocar los componentes.
 */

export const BUSINESS = {
  name: 'Nails Boutique',
  tagline: 'Especialistas en cristal Swarovski',
  city: 'Puebla',
  // WhatsApp en formato internacional (52 = México) sin signos ni espacios.
  whatsappNumber: '522211048966',
  // Número "bonito" para mostrar al usuario.
  whatsappDisplay: '221 104 8966',
  location: {
    plaza: 'Plaza Dorada',
    reference:
      'Por la entrada del restaurante “La Vaca Negra”, local #61 A, frente a los sanitarios de la planta baja.',
    // Enlace de Google Maps (Plaza Dorada, Puebla).
    mapsUrl: 'https://maps.google.com/?q=Plaza+Dorada+Puebla',
  },
  schedule: [
    { days: 'Lunes a Sábado', hours: '10:30 a 18:30' },
    { days: 'Domingo', hours: '11:15 a 15:00' },
  ],
  social: {
    // Rellenar cuando estén disponibles.
    instagram: '',
    facebook: '',
  },
}

/**
 * Construye un enlace de WhatsApp con un mensaje pre-llenado opcional.
 * @param {string} [message] Texto que verá prellenado el cliente.
 * @returns {string} URL lista para usar en un <a href="...">.
 */
export function buildWhatsAppLink(message) {
  const base = `https://api.whatsapp.com/send?phone=${BUSINESS.whatsappNumber}`
  return message ? `${base}&text=${encodeURIComponent(message)}` : base
}

// Mensaje por defecto para el botón principal.
export const DEFAULT_WHATSAPP_MESSAGE =
  '¡Hola Nails Boutique! Me gustaría agendar una cita. 💅✨'
