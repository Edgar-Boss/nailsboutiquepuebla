# Nails Boutique · Landing Page

Landing page elegante para **Nails Boutique** (Puebla), especialistas en uñas
acrílicas y aplicación de **cristal Swarovski**. Construida con **React + Vite**.

La página funciona **desde el primer día solo con WhatsApp**, pero su
arquitectura ya está preparada para conectar en el futuro un sistema de citas
(backend/webhook) sin rehacer nada.

## 🚀 Puesta en marcha

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera la versión de producción en /dist
npm run preview  # previsualiza el build de producción
```

## 🧱 Estructura del proyecto

```
src/
├── assets/                # Imágenes (logo, hero, galería, ubicación, horario)
├── components/            # Componentes de UI + su CSS
│   ├── Header.jsx         # Logo + menú + botón WhatsApp (con menú móvil)
│   ├── Hero.jsx           # Portada principal
│   ├── Services.jsx       # Tarjetas de servicios
│   ├── Gallery.jsx        # Galería responsive (se adapta a N fotos)
│   ├── BookingSection.jsx # Sección de citas (preparada para el futuro)
│   ├── Contact.jsx        # Ubicación, horario y WhatsApp
│   ├── Footer.jsx         # Pie de página
│   ├── WhatsAppFloat.jsx  # Botón flotante de WhatsApp
│   └── icons.jsx          # Iconos SVG inline
├── config/
│   └── site.js            # Datos del negocio + helper de WhatsApp (EDITAR AQUÍ)
├── hooks/
│   └── useReveal.js       # Animación de entrada al hacer scroll
└── services/
    └── appointmentService.js  # Capa de citas lista para conectar un backend
```

## ✏️ Cómo editar los datos del negocio

Todo lo importante (WhatsApp, horario, ubicación, redes) vive en
[`src/config/site.js`](src/config/site.js). No hace falta tocar los componentes.

## 🔌 Cómo activar el sistema de citas en el futuro

Actualmente **no hay backend**, así que el agendamiento se hace por WhatsApp.
Cuando exista un backend/webhook de citas:

1. Copia `.env.example` a `.env` y define:
   ```
   VITE_API_BASE_URL=https://tu-backend.com
   ```
2. En [`src/services/appointmentService.js`](src/services/appointmentService.js)
   ya están listas las funciones que consumen los endpoints con `fetch`:
   - `getServices()` → `GET /api/public/services`
   - `getAvailableDates(serviceId)` → `GET /api/public/available-dates`
   - `getAvailableSlots(date, serviceId)` → `GET /api/public/available-slots`
   - `createAppointment(data)` → `POST /api/public/appointments`

   Con `VITE_API_BASE_URL` definida, dejan de usar datos de ejemplo (mock) y
   pasan a llamar al backend real automáticamente.
3. En [`src/components/BookingSection.jsx`](src/components/BookingSection.jsx)
   sustituye el aviso "Muy pronto..." por el formulario de reservas usando esas
   funciones. Está marcado con comentarios `🔌` y `TODO`.

## 🎨 Diseño

- Paleta: rosa claro, blanco, nude y dorado suave.
- Tipografías: Cormorant Garamond (títulos) + Poppins (texto).
- 100% responsive (móvil, tablet y escritorio).
- Botón flotante de WhatsApp y animaciones sutiles en botones y tarjetas.
