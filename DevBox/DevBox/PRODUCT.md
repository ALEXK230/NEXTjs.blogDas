# Product

<!-- impeccable:product-schema 1 -->

## Nombre

**DevNova**

**Lema:** “Ideas que compilan, proyectos que evolucionan.”

El nombre y el lema son compromisos de marca confirmados. En navegación, metadatos, pie de página y mensajes de sistema se usa siempre “DevNova”.

## Platform

web

## Stack

- **Framework:** Next.js con App Router.
- **Entrega:** exportación estática mediante `output: 'export'`.
- **Contenido:** archivos Markdown versionados en el repositorio, interpretados con `gray-matter` y `marked`.
- **Despliegue objetivo:** Cloudflare Pages.
- **Persistencia:** no hay base de datos, CMS, autenticación ni servidor propio.
- **Flujo editorial:** crear o editar un `.md`, añadir recursos, revisar y hacer commit.

La elección preserva un sitio rápido, auditable y de bajo mantenimiento: el contenido y su historial viven junto al código.

## Users

### Audiencia principal: docente

Revisa y evalúa entregas de la materia **Desarrollo asistido por software**. Normalmente llega desde un enlace del aula virtual o desde una entrega directa y busca una evidencia concreta, no una experiencia de exploración larga.

Necesita poder:

1. Reconocer en segundos qué es DevNova y a qué materia pertenece.
2. Encontrar un proyecto, taller o deber por título, tipo, unidad, semana, tecnología o autor.
3. Distinguir el estado y la fecha de entrega sin abrir cada publicación.
4. Ver evidencia real: capturas, repositorio, tecnologías, autores y conclusiones.
5. Confirmar qué integrante o integrantes participaron.

### Autores: equipo de seis integrantes

Publican y mantienen el expediente del curso durante el semestre. Una entrada puede tener uno o varios autores. El sistema debe tolerar contribuciones paralelas y no exigir conocimientos de administración de contenido más allá de Markdown, Git y la estructura acordada.

### Audiencia secundaria

Compañeros de curso y lectores públicos pueden consultar el sitio como referencia académica. No son la audiencia que gobierna las decisiones de producto.

## Product Purpose

DevNova es el **repositorio editorial público de aprendizaje** de un equipo de Software. Reúne deberes, talleres y proyectos en una experiencia que combina la claridad de un expediente académico con la lógica reconocible de un repositorio de desarrollo.

El producto existe para:

- centralizar el trabajo del semestre;
- hacer verificable cada entrega;
- conservar el contexto y la evolución de los proyectos;
- atribuir el trabajo a sus autores;
- reducir el tiempo que el docente tarda en encontrar y comprobar evidencia;
- presentar el crecimiento técnico del equipo sin convertir el sitio en un portafolio comercial.

El producto tiene éxito cuando una persona que llega por primera vez puede identificar la entrega correcta, comprender su alcance y abrir su evidencia principal en menos de un minuto.

## Positioning

DevNova no es un blog de opinión, un tablero de tareas genérico ni un portafolio de contratación. Es un **expediente académico navegable como un repositorio creativo**: cada publicación funciona como un archivo versionado que muestra qué se hizo, quién lo hizo, con qué tecnología, en qué momento y dónde puede verificarse.

La evidencia tiene prioridad sobre la autopromoción. El lenguaje visual puede ser expresivo, pero los datos académicos y el acceso al repositorio nunca quedan subordinados a la decoración.

## Operating Context

- El docente suele revisar varias entregas en una sesión y necesita escanear antes de leer.
- El sitio se consulta en escritorio durante evaluación, pero debe funcionar completamente en móvil.
- El contenido crece de forma incremental durante el semestre y permanece disponible como historial.
- Las publicaciones pueden encontrarse en distintos estados: planificadas, en progreso o entregadas.
- Una entrega puede pertenecer a una unidad, semana y tecnología; estos datos sirven para orientar, filtrar y relacionar contenido.
- Los proyectos extensos pueden registrar avances sucesivos, mientras que un deber o taller puede resolverse en una sola publicación.
- El repositorio Git es tanto fuente editorial como parte de la evidencia del trabajo.

## Information Architecture

### Navegación principal

1. **Inicio** (`/`): presenta DevNova, el estado general del semestre, la entrega destacada y accesos a las colecciones.
2. **Entregas** (`/entradas/`): índice completo con búsqueda y filtros.
3. **Detalle de entrega** (`/entradas/[slug]/`): evidencia, metadatos, desarrollo, capturas, reflexión y navegación contigua.
4. **Nosotros** (`/nosotros/`): misión, visión y perfiles del equipo.

La vista de detalle pertenece conceptualmente a Entregas; no añade un cuarto elemento a la navegación global.

### Ejes de organización

- **Tipo:** Proyecto, Taller, Deber.
- **Tiempo:** unidad, semana, fecha de publicación y fecha de entrega.
- **Estado:** Planificado, En progreso, Entregado.
- **Tecnología:** etiquetas controladas, por ejemplo React, Git, UML o Testing.
- **Autoría:** uno o varios integrantes del equipo.

Tipo y cronología son los ejes primarios. Tecnología y autoría complementan la búsqueda, sin convertir la interfaz en un panel de filtros complejo.

## Primary Journeys

### 1. Verificar una entrega concreta

1. El docente llega a Inicio o directamente al índice.
2. Busca por título, autor o tecnología, o filtra por tipo.
3. Escanea tipo, unidad/semana, estado, fecha y autores.
4. Abre la entrada.
5. Revisa capturas y contexto.
6. Abre el repositorio en una pestaña nueva.

### 2. Comprender la evolución del semestre

1. La persona ve el panorama general y el progreso publicado.
2. Recorre las entregas en orden cronológico inverso.
3. Identifica avances relacionados de un mismo proyecto.
4. Navega a la entrega anterior o siguiente sin regresar al índice.

### 3. Publicar una entrada

1. Un integrante duplica la plantilla Markdown.
2. Completa metadatos y contenido sin tocar componentes React.
3. Añade capturas con texto alternativo y enlaza el repositorio.
4. Ejecuta la validación local y revisa la vista generada.
5. Hace commit y abre la contribución para revisión.

## Capabilities and Constraints

### Capacidades obligatorias

- Mostrar todas las entradas publicadas del semestre.
- Buscar por título, resumen, autor, tecnología y cuerpo de la entrada.
- Filtrar por tipo sin perder la referencia del conjunto completo.
- Exponer estado, progreso cuando aplique y fecha de entrega.
- Mostrar autoría en el índice y en el detalle.
- Enlazar al repositorio real con una acción clara.
- Soportar una o varias capturas por entrada, con pie y texto alternativo.
- Relacionar entregas contiguas y avances de un mismo proyecto cuando exista esa relación.
- Mostrar misión, visión y los seis integrantes con nombre, foto, rol y GitHub.
- Funcionar sin JavaScript para la lectura principal; la búsqueda y los filtros pueden mejorar progresivamente la experiencia.

### Restricciones

- Todo debe poder compilarse como sitio estático.
- Ninguna función esencial depende de una cuenta, una API privada o un runtime de servidor.
- No se inventan proyectos, autores, notas, métricas, testimonios ni datos institucionales.
- El contenido académico se publica en español.
- Los enlaces externos se identifican y se abren de forma segura.
- El sitio debe conservar buen rendimiento aun cuando aumente la cantidad de entradas.

### Fuera de alcance inicial

- Comentarios públicos.
- Calificaciones o rúbricas interactivas.
- Autenticación y perfiles editables.
- Panel de administración.
- Sincronización automática con GitHub.
- Notificaciones, correo o calendario.
- Analítica individual de integrantes.

## Content Model

Cada archivo de `content/entradas/` representa una publicación. Los campos deben validarse durante la compilación.

Este es el **esquema objetivo de la migración DevNova**. Las entradas heredadas todavía no contienen todos los campos nuevos (`fechaEntrega`, `unidad`, `estado` y, cuando aplique, `progreso`); deben completarse con datos reales antes de activar una validación estricta. La ausencia actual no autoriza a inferir valores.

### Frontmatter requerido

| Campo | Tipo | Regla |
|---|---|---|
| `titulo` | texto | Claro, específico y único. |
| `tipo` | enum | `proyecto`, `taller` o `deber`. |
| `fecha` | fecha ISO | Fecha de publicación. |
| `fechaEntrega` | fecha ISO | Fecha límite o fecha oficial de entrega. |
| `semana` | número | Semana académica; puede omitirse solo si se usa `unidad`. |
| `unidad` | texto o número | Unidad curricular correspondiente. |
| `estado` | enum | `planificado`, `en-progreso` o `entregado`. |
| `autores` | lista | Uno o varios identificadores existentes en `data/equipo.js`. |
| `resumen` | texto | Una síntesis breve orientada a la evidencia. |
| `repo` | URL | Repositorio verificable; si aún no existe, se declara explícitamente como pendiente. |
| `tecnologias` | lista | Vocabulario consistente y reutilizable. |

### Frontmatter opcional

| Campo | Tipo | Uso |
|---|---|---|
| `progreso` | entero 0–100 | Solo para trabajos con avance medible; nunca se infiere. |
| `proyecto` | identificador | Agrupa avances de un mismo proyecto. |
| `capturas` | lista | Ruta, texto alternativo y pie de cada evidencia visual. |
| `commit` | texto | Hash corto o referencia de hito relevante. |
| `rama` | texto | Rama asociada cuando aporte contexto. |
| `destacada` | booleano | Permite fijar una entrega pertinente en Inicio. |
| `muestra` | booleano | Distingue contenido demostrativo de evidencia real. |

### Cuerpo de la entrada

La estructura editorial recomendada es:

1. **Objetivo** — qué debía resolverse.
2. **Proceso** — decisiones, herramientas y evolución.
3. **Resultado** — qué funciona y qué quedó fuera.
4. **Evidencia** — capturas, repositorio y, si aporta valor, commit o rama.
5. **Reflexión** — aprendizaje, dificultad y siguiente mejora.

Los encabezados pueden adaptarse al tipo de actividad, pero una entrada nunca debe omitir evidencia y autoría.

## Status Semantics

- **Planificado:** existe como compromiso o actividad próxima; no afirma trabajo realizado.
- **En progreso:** hay trabajo iniciado y evidencia parcial. El porcentaje solo aparece si el autor lo mantiene de forma responsable.
- **Entregado:** la actividad fue enviada o cerrada; no equivale a aprobada ni calificada.

La fecha y la etiqueta textual siempre acompañan cualquier indicador visual. Color, icono o barra no pueden ser la única forma de comunicar estado.

## Editorial Voice

- Clara, directa y técnica sin sonar burocrática.
- Juvenil por su energía, no por usar jerga artificial.
- Escrita en primera persona plural cuando habla el equipo y en voz descriptiva cuando documenta una entrega.
- Centrada en decisiones y evidencia: “qué hicimos”, “por qué”, “qué comprobamos”.
- Honesta frente a límites, errores y trabajo pendiente.

### Convenciones de microcopy

- Usar **Entregas** como término paraguas.
- Usar **Proyecto**, **Taller** y **Deber** como nombres visibles de tipo.
- Preferir “Ver repositorio” frente a “Haz clic aquí”.
- Usar “Fecha de entrega”, no “Deadline”.
- No afirmar que una entrega fue aprobada si solo se conoce que fue enviada.

## Brand Commitments

- **Nombre:** DevNova.
- **Lema:** “Ideas que compilan, proyectos que evolucionan.”
- **Concepto:** repositorio creativo de aprendizaje y desarrollo de software.
- **Personalidad:** organizada, dinámica, profesional, juvenil y tecnológica.
- **Referencia vinculante:** estética editorial moderna y minimalista con grandes titulares sans serif, composición asimétrica y metáforas de carpetas, ventanas y tarjetas.
- **Recursos propios del mundo Dev:** código, terminal, commits, ramas, carpetas, archivos, estados y progreso.
- **Paleta comprometida:** azul eléctrico, cian, negro carbón y blanco crema.

La referencia visual orienta la composición y el carácter; no autoriza copiar nombres, textos, fotografías, marcas ni estructura de portafolio de la pieza original.

## Evidence on Hand

### Disponible

- Proyecto Next.js existente y funcional.
- Diez entradas Markdown de muestra o trabajo previo en `content/entradas/`.
- Capturas y enlaces a repositorios reales indicados por el usuario como disponibles.
- Estructura de equipo en `data/equipo.js`.
- Imagen de referencia editorial proporcionada en esta solicitud.

### Pendiente de contenido confirmado

- Misión y visión textuales.
- Nombres, fotos, roles y enlaces de GitHub definitivos de los seis integrantes.
- Institución, carrera, paralelo, periodo académico y nombre del docente, si deben mostrarse.
- Dominio y repositorio público definitivo de DevNova.
- Fechas de entrega y estados reales de cada publicación existente.

### Prohibido inventar

- Calificaciones, aprobación del docente o métricas de rendimiento.
- Testimonios y citas.
- Nombres, cargos o identidades de integrantes.
- Proyectos, commits o repositorios que no existan.
- Logos institucionales no entregados o no autorizados.

## Success Criteria

### Experiencia

- La identidad y propósito de DevNova son comprensibles en el primer viewport.
- Una entrega concreta puede localizarse mediante navegación, filtro o búsqueda en pocos pasos.
- Tipo, estado, fecha y autoría son visibles antes de abrir el detalle.
- Repositorio y capturas aparecen como evidencia prioritaria en el detalle.
- La interfaz sigue siendo legible y navegable con teclado, lector de pantalla y zoom al 200 %.

### Contenido

- Toda entrada publicada tiene tipo, fecha, estado, autores, resumen, tecnologías y evidencia.
- Los estados usan vocabulario controlado y no se contradicen con el contenido.
- Las muestras están identificadas y no pueden confundirse con trabajos reales.

### Técnica

- La compilación estática falla de forma comprensible ante frontmatter inválido.
- No hay enlaces internos rotos ni recursos ausentes en producción.
- La lectura esencial no depende de interacción cliente.
- El sitio conserva objetivos de rendimiento compatibles con una revisión rápida en conexiones medias.

## Product Principles

1. **La evidencia antes que el discurso.** Capturas, repositorio y autoría son contenido principal.
2. **Encontrar antes que explorar.** La expresión editorial nunca dificulta localizar una entrega.
3. **La evolución queda visible.** El semestre se entiende como historial, no como colección de piezas aisladas.
4. **Publicar cuesta un archivo y un commit.** El flujo editorial se mantiene pequeño y auditable.
5. **Los estados dicen la verdad.** “Entregado” no significa “aprobado”, y el progreso no se inventa.
6. **Nada fabricado.** Los vacíos se señalan como pendientes.
7. **Una identidad, múltiples densidades.** Inicio puede ser expresivo; índice y detalle deben conservar máxima claridad.

## Accessibility & Inclusion

- Objetivo mínimo: WCAG 2.2 nivel AA para contenido y controles.
- Navegación completa por teclado con foco visible.
- Enlace “Saltar al contenido”.
- Contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande y componentes gráficos esenciales.
- El color nunca comunica por sí solo tipo, estado, progreso o selección.
- Las capturas incluyen texto alternativo útil; los detalles complejos pueden incorporar pie o descripción extensa.
- Las animaciones respetan `prefers-reduced-motion` y no bloquean la lectura.
- El orden del DOM conserva una lectura lógica aunque la composición visual sea asimétrica.
- Controles táctiles con área mínima de 44 × 44 px.
- Fechas escritas de forma inequívoca en español; los valores máquina usan ISO.

## Open Decisions

- Datos institucionales que aparecerán en la interfaz.
- Vocabulario definitivo de unidades y tecnologías.
- Si los trabajos planificados serán públicos o solo se publicarán al iniciar.
- Si el progreso se mantendrá manualmente o se omitirá en actividades cortas.
- Reglas para elegir la entrega destacada en Inicio.
- Si se añadirá filtro por integrante cuando exista contenido real suficiente.

Estas decisiones deben resolverse con contenido real; no bloquean la definición del sistema ni la navegación base.
