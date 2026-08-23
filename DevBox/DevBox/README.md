# DevNova

**Ideas que compilan, proyectos que evolucionan.**

DevNova es el repositorio editorial del equipo para la materia **Desarrollo Asistido por Software**. Organiza proyectos, talleres y deberes como archivos académicos verificables: cada entrada declara autoría, tecnologías, estado, fecha y acceso a su evidencia.

## Ejecutar

```bash
npm install
npm run dev
```

Desarrollo: <http://localhost:3210>

```bash
npm run build
npm start
```

La compilación genera un sitio estático en `out/`, listo para Cloudflare Pages.

## Publicar una entrega

Crea un archivo `.md` en `content/entradas/`. El nombre del archivo se convierte en la URL.

```markdown
---
titulo: "Integración continua con GitHub Actions"
tipo: taller                     # proyecto | taller | deber
fecha: 2026-06-17                # publicación
fechaEntrega: 2026-06-20
semana: 9
unidad: 2
estado: entregado                # planificado | en-progreso | entregado
progreso: 80                     # opcional; solo si se mantiene de verdad
autores: ["Ana Ruiz", "Luis Peña"]
repo: "https://github.com/equipo/proyecto"
capturas: ["/capturas/ci-01.png"]
tecnologias: ["GitHub Actions", "Node.js"]
resumen: "Una síntesis breve orientada a la evidencia."
muestra: false
---

## Objetivo

Contenido Markdown de la entrega.
```

- Las capturas viven en `public/capturas/`.
- `repo` puede ser `null`; la interfaz lo declara como pendiente.
- `progreso` se omite en actividades que no necesitan porcentaje.
- `muestra: true` identifica contenido demostrativo y evita confundirlo con trabajo real.
- Los números de entrega se asignan por orden cronológico ascendente.

## Datos pendientes

Completa misión, visión y los seis perfiles en `data/equipo.js`. Las publicaciones actuales están marcadas como muestras; reemplázalas por los archivos reales antes de presentar el sitio.

## Estructura

```text
app/                 rutas, componentes y sistema visual
content/entradas/    publicaciones Markdown
data/equipo.js       misión, visión e integrantes
lib/                 lectura, normalización y formato
public/              capturas y retratos
scripts/servir.mjs   servidor de la exportación estática
```

Las decisiones normativas están en [`PRODUCT.md`](PRODUCT.md) y [`DESIGN.md`](DESIGN.md).
