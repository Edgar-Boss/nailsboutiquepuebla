import { useReveal } from '../hooks/useReveal.js'
import img1 from '../assets/unas-1.webp'
import img2 from '../assets/unas-2.webp'
import img3 from '../assets/unas-3.webp'
import img4 from '../assets/unas-4.webp'
import img5 from '../assets/unas-5.webp'
import './Gallery.css'

/**
 * Galería de trabajos.
 * Para añadir o quitar fotos, edita este arreglo: el grid se adapta solo
 * (responsive) sin dejar huecos, sin importar cuántas imágenes haya.
 */
const PHOTOS = [
  { src: img1, alt: 'Uñas nude con cristales y detalles dorados' },
  { src: img2, alt: 'Uñas coffin en tono nude con aplicación de cristal' },
  { src: img3, alt: 'Uñas amarillas con cristales de colores' },
  { src: img4, alt: 'Uñas almendra con diseño de corazones' },
  { src: img5, alt: 'Catálogo de diseños con cristal Swarovski' },
]

export default function Gallery() {
  const { ref, visible } = useReveal()

  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Nuestro trabajo</span>
          <h2 className="section-title">Galería de diseños</h2>
          <p className="section-subtitle">
            Algunos de nuestros trabajos con cristal Swarovski y acabados
            personalizados.
          </p>
        </div>

        <div
          ref={ref}
          className={`gallery__grid reveal ${visible ? 'is-visible' : ''}`}
        >
          {PHOTOS.map((photo, i) => (
            <figure className="gallery__item" key={i}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="gallery__img"
              />
              <figcaption className="gallery__caption">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
