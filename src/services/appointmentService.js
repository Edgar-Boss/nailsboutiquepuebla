/**
 * appointmentService.js
 * ----------------------
 * Capa de servicio para el (futuro) sistema de citas.
 *
 * ⚠️ ESTADO ACTUAL: el backend/webhook de citas AÚN NO EXISTE.
 *    Por eso todas las funciones están "en modo placeholder": devuelven datos
 *    de ejemplo (mock) y NO hacen llamadas reales a la red.
 *
 * ✅ CÓMO ACTIVAR EL BACKEND EN EL FUTURO (sin rehacer la página):
 *    1. Crea un archivo `.env` en la raíz del proyecto (copia `.env.example`).
 *    2. Define `VITE_API_BASE_URL=https://tu-backend.com`.
 *    3. Cambia la constante USE_MOCK a `false` (o bórrala) más abajo.
 *    4. Los componentes que consuman estas funciones seguirán funcionando igual,
 *       porque la "forma" de los datos que devuelven no cambia.
 *
 * Endpoints REST previstos (documentados para quien conecte el backend):
 *    GET  /api/public/services
 *    GET  /api/public/available-dates?serviceId=1
 *    GET  /api/public/available-slots?serviceId=1&date=2026-07-03
 *    POST /api/public/appointments
 */

// URL base del backend, leída desde variables de entorno de Vite.
// Mientras no exista un backend público, quedará como cadena vacía.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

// Mientras no haya backend (o no se defina API_BASE_URL) usamos datos mock.
// 👉 Cuando el backend esté listo y VITE_API_BASE_URL configurada, esto será false
//    automáticamente y las funciones consumirán los endpoints reales.
const USE_MOCK = !API_BASE_URL

/**
 * Wrapper genérico sobre fetch para hablar con el backend de citas.
 * Centraliza headers, manejo de errores y parseo JSON.
 *
 * 🔌 AQUÍ ES DONDE SE CONECTA EL WEBHOOK/BACKEND DE CITAS.
 *
 * @param {string} path Ruta del endpoint, p.ej. '/api/public/services'.
 * @param {RequestInit} [options] Opciones estándar de fetch (method, body, etc.).
 * @returns {Promise<any>} JSON de la respuesta.
 */
async function apiFetch(path, options = {}) {
  if (!API_BASE_URL) {
    throw new Error(
      'VITE_API_BASE_URL no está configurada. Define el backend antes de hacer llamadas reales.'
    )
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Error ${response.status} al llamar a ${path}`)
  }

  return response.json()
}

/* -------------------------------------------------------------------------- */
/*  Datos de ejemplo (mock) — se eliminan/ignoran cuando exista el backend.    */
/* -------------------------------------------------------------------------- */

const MOCK_SERVICES = [
  { id: 1, name: 'Uñas acrílicas', durationMin: 120 },
  { id: 2, name: 'Cristal Swarovski', durationMin: 60 },
  { id: 3, name: 'Manicure', durationMin: 45 },
  { id: 4, name: 'Pedicure', durationMin: 60 },
  { id: 5, name: 'Gelish', durationMin: 60 },
]

/* -------------------------------------------------------------------------- */
/*  API pública del servicio (lo que consumen los componentes).                */
/* -------------------------------------------------------------------------- */

/**
 * Obtiene la lista de servicios disponibles.
 * Futuro endpoint: GET /api/public/services
 * @returns {Promise<Array<{id:number,name:string,durationMin:number}>>}
 */
export async function getServices() {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_SERVICES)
  }
  // 🔌 Conectar backend:
  return apiFetch('/api/public/services')
}

/**
 * Obtiene las fechas disponibles para un servicio.
 * Futuro endpoint: GET /api/public/available-dates?serviceId=1
 * @param {number} serviceId
 * @returns {Promise<string[]>} Fechas en formato ISO (YYYY-MM-DD).
 */
export async function getAvailableDates(serviceId) {
  if (USE_MOCK) {
    // Datos de ejemplo: los próximos 5 días.
    const dates = Array.from({ length: 5 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() + i + 1)
      return d.toISOString().slice(0, 10)
    })
    return Promise.resolve(dates)
  }
  // 🔌 Conectar backend:
  return apiFetch(`/api/public/available-dates?serviceId=${serviceId}`)
}

/**
 * Obtiene los horarios disponibles para un servicio en una fecha.
 * Futuro endpoint: GET /api/public/available-slots?serviceId=1&date=2026-07-03
 * @param {string} date Fecha en formato ISO (YYYY-MM-DD).
 * @param {number} serviceId
 * @returns {Promise<string[]>} Horarios, p.ej. ['10:30', '12:00'].
 */
export async function getAvailableSlots(date, serviceId) {
  if (USE_MOCK) {
    return Promise.resolve(['10:30', '12:00', '13:30', '15:00', '16:30'])
  }
  // 🔌 Conectar backend:
  return apiFetch(
    `/api/public/available-slots?serviceId=${serviceId}&date=${date}`
  )
}

/**
 * Crea una nueva cita.
 * Futuro endpoint: POST /api/public/appointments
 * @param {object} appointmentData Ej: { serviceId, date, time, name, phone }.
 * @returns {Promise<object>} Cita creada (según responda el backend).
 */
export async function createAppointment(appointmentData) {
  if (USE_MOCK) {
    // Simula una respuesta exitosa del backend.
    return Promise.resolve({
      ok: true,
      id: `mock-${Date.now()}`,
      ...appointmentData,
    })
  }
  // 🔌 Conectar backend:
  return apiFetch('/api/public/appointments', {
    method: 'POST',
    body: JSON.stringify(appointmentData),
  })
}
