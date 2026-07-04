/**
 * Script de optimización de imágenes.
 * Convierte las fotos pesadas (.png) de src/assets a .webp comprimido y
 * redimensionado, para mejorar la velocidad de carga sin deformar la imagen.
 *
 * Uso:  node scripts/optimize-images.mjs
 * (Requiere la devDependency `sharp`.)
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const assets = join(__dirname, '..', 'src', 'assets')

// nombre base (sin extensión) → ancho máximo objetivo
const targets = {
  'unas-hero': 1100,
  'unas-1': 1000,
  'unas-2': 1000,
  'unas-3': 1000,
  'unas-4': 1000,
  'unas-5': 1000,
  location: 1000,
}

for (const [name, width] of Object.entries(targets)) {
  const input = join(assets, `${name}.png`)
  if (!existsSync(input)) {
    console.warn(`⚠️  No se encontró ${name}.png, se omite.`)
    continue
  }
  const output = join(assets, `${name}.webp`)
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output)
  console.log(`✓ ${name}.png → ${name}.webp`)
}

console.log('Optimización completada.')
