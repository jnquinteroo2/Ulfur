# ULFUR — Sitio Web Oficial

Sitio web oficial de la banda ULFUR (Thrash / Black / Death Metal) desde Mosquera, Cundinamarca, Colombia.

## Stack Tecnológico

- **Next.js 14** (App Router)
- **TypeScript** estricto
- **Tailwind CSS v3**
- **Framer Motion v11**
- **GSAP**
- **Lucide React**
- **Google Fonts** (Metal Mania, Barlow Condensed, Crimson Text)

## Requisitos

- Node.js 18.17 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Build de Producción

```bash
npm run build
```

## Despliegue en Cloudflare

### Desde la CLI

```bash
npm i -g cloudflare
cloudflare
```

### Desde el Dashboard

1. Conectar el repositorio en [cloudflare.com](https://cloudflare.com)
2. Seleccionar el framework: **Next.js**
3. Build command: `next build`
4. Output directory: `.next`
5. Deploy

La aplicación detectará automáticamente que es un proyecto Next.js y usará la configuración óptima.

### Variables de entorno

No se requieren variables de entorno adicionales para el funcionamiento básico.

## Estructura del Proyecto

```
ulfur/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home (Hero)
│   │   ├── bio/page.tsx          # Biografía
│   │   ├── members/page.tsx      # Integrantes
│   │   ├── discography/page.tsx  # Discografía
│   │   ├── shows/page.tsx        # Shows
│   │   ├── contact/page.tsx      # Contacto
│   │   ├── layout.tsx            # Layout global
│   │   └── globals.css           # Sistema de diseño
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── AudioPlayer.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── GrainOverlay.tsx
│   │   └── AshParticles.tsx
│   └── context/
│       └── AudioPlayerContext.tsx
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Contacto

- Email: svarturulfur5@gmail.com
- Teléfonos: 3046297470 / 3163048406
- Sello: Warframe Records (New York)
