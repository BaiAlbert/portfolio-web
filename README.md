# Portfolio Web — Alberto Ramírez Fernández

Portfolio personal construido con **React**, **Vite** y **Tailwind CSS v4**.

## Arrancar el proyecto

```bash
npm install
npm run dev        # Servidor de desarrollo → http://localhost:5173
npm run build      # Build de producción en dist/
npm run preview    # Previsualizar el build
```

## Dónde editar los datos

| Qué                          | Archivo                          |
|------------------------------|----------------------------------|
| Proyectos                    | `src/data/projects.js`           |
| Formación (línea temporal y ubicación) | `src/data/education.js` |
| Habilidades / tecnologías    | `src/data/skills.js`             |
| Textos del hero y sobre mí   | `src/components/Hero.jsx` y `src/components/About.jsx` |
| Enlaces de contacto          | `src/components/Contact.jsx`     |
| Meta description y título    | `index.html`                     |


## CV

Coloca el CV en `public/cv.pdf`. El botón "Descargar CV" apunta ahí.

## Cambiar colores

Los colores de marca se definen como tokens en `src/index.css` dentro del bloque `@theme`:

```css
@theme {
  --color-lavender-300: #D2C3F6;   /* Lavender principal */
  --color-violet-600: #36255C;     /* Violet principal   */
  /* … tonos derivados …           */
}
```

Modifica esos valores y los tonos derivados en el mismo bloque.

## Cambiar tipografía

La fuente se define en un solo lugar (`src/index.css`, bloque `@theme`):

```css
--font-sans: "Plus Jakarta Sans Variable", system-ui, sans-serif;
```

Si quieres cambiarla:
1. Instala la nueva fuente con `npm install @fontsource-variable/<nombre>` (o la variante estática).
2. Importa el CSS de la fuente en `src/index.css` (sustituye la línea `@import "@fontsource-variable/plus-jakarta-sans"`).
3. Actualiza `--font-sans` con el nombre de la nueva fuente.

## Estructura de carpetas

```
src/
├── components/
│   ├── icons/
│   │   └── BrandIcons.jsx    # GitHub y LinkedIn SVGs
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   └── Reveal.jsx            # Animaciones suaves de scroll
├── data/
│   ├── education.js
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useTheme.js
├── App.jsx
├── index.css
└── main.jsx
```
