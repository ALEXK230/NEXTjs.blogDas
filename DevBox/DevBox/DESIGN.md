---
name: DevNova
description: Expediente académico explorable como una carpeta de proyecto editorial.
colors:
  canvas-cream: "#f7f3e8"
  paper: "#fffcf4"
  carbon: "#121419"
  carbon-muted: "#51545a"
  carbon-subtle: "#74777e"
  line: "#c9c6bb"
  line-strong: "#92959c"
  electric-blue: "#155eef"
  electric-blue-hover: "#0d47d9"
  deep-blue: "#0b3dba"
  active-cyan: "#28c7e8"
  active-cyan-soft: "#cff6fc"
  white: "#fff"
typography:
  display:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "clamp(5rem, 13.2vw, 11rem)"
    fontWeight: 600
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  page-title:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "clamp(4.5rem, 11vw, 10rem)"
    fontWeight: 600
    lineHeight: 0.78
    letterSpacing: "-0.07em"
  detail-title:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 7.5vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.055em"
  section-title:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  card-title:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  reading:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
  meta:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.01em"
  label:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  progress: "4px"
  code: "5px"
  file: "7px"
  compact: "8px"
  control: "10px"
  portrait: "14px"
  window: "16px"
  card: "20px"
  folder: "30px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
  24: "96px"
  32: "128px"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "48px"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "48px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "46px"
  nav-item-active:
    backgroundColor: "{colors.active-cyan}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  type-project:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 11px"
    height: "32px"
  type-workshop:
    backgroundColor: "{colors.active-cyan}"
    textColor: "{colors.carbon}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 11px"
    height: "32px"
  status-delivered:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 11px"
    height: "30px"
---

# Design System: DevNova

## Overview

**Creative North Star: "El archivo que compila"**

DevNova convierte el expediente académico en una carpeta de proyecto explorable. La interfaz se siente como una mesa editorial de papel crema donde una carpeta azul eléctrico organiza entregas verificables; terminales carbón, rutas y estados monoespaciados explican qué contiene cada archivo y cómo comprobarlo. La expresividad pertenece a la escala y a la composición, no a la decoración.

La portada concentra el mundo completo: la palabra DevNova es monumental, la carpeta es el objeto dominante y la acción vive dentro de ella; una terminal a la izquierda y una ficha de estado a la derecha completan la historia. En Entregas, detalle, Nosotros y 404, la misma gramática se vuelve más sobria para favorecer localización, autoría, estado y evidencia. Se rechazan tanto la cuadrícula de tarjetas genéricas como la consola monocroma que diluyen la metáfora de archivo.

**Key Characteristics:**

- Papel crema como mesa continua; nunca blanco puro a pantalla completa.
- Carpeta azul eléctrico con pestañas escalonadas como firma estructural.
- Terminales carbón para contexto técnico y evidencia verificable.
- Space Grotesk para la voz editorial e IBM Plex Mono para datos.
- Asimetría controlada, con máximo dos piezas rotadas en un viewport.
- Iconografía geométrica implementada con SVG o CSS, nunca con glifos tipográficos ni emoji.
- Sin eyebrows decorativos: rutas, estados y metadatos existen solo cuando aportan información real.

**The Evidence-First Rule.** La jerarquía conduce desde identificación y estado hacia evidencia o repositorio; ningún gesto gráfico puede desplazar esos datos.

## Colors

La paleta normativa es breve y de alto contraste: crema editorial, carbón técnico, azul estructural y cian activo.

### Primary

- **Electric Blue:** construye la carpeta, las acciones primarias, estados entregados y barras estructurales.
- **Electric Blue Hover:** oscurece exclusivamente la acción primaria en hover.
- **Deep Blue:** crea profundidad detrás de la carpeta y sus pestañas.

### Secondary

- **Active Cyan:** señala selección, actividad, progreso, conexiones y foco sobre superficies oscuras.
- **Active Cyan Soft:** sostiene selecciones suaves, avisos, estados en progreso y fondos de iconos de archivo.

### Neutral

- **Canvas Cream:** fondo global cálido.
- **Paper:** hojas, controles claros y superficies de lectura.
- **Carbon:** tinta principal, terminales, barras de repositorio y pie.
- **Carbon Muted / Carbon Subtle:** metadatos secundarios; Subtle no se usa para cuerpo pequeño.
- **Line / Line Strong:** divisores y contornos, respectivamente.
- **White:** texto de alto contraste sobre azul o carbón.

Los interiores oscuros usan tintas contextuales observadas entre `#777a81` y `#c9cbd1`, fondos `#0d0f12` y `#1a1d23`, y divisores `#34373e` / `#35383f`. Las superficies azules admiten tintas contextuales entre `#c9d9ff` y `#e5edff`; estas variantes permanecen locales porque ajustan contraste dentro de un material, no amplían la paleta semántica. Los bordes translúcidos blancos usan opacidades `0.38`, `0.55` y `0.72`; la pista de progreso usa carbón al `0.18`.

**The Blue Builds, Cyan Activates Rule.** El azul define estructura y acción; el cian comunica actividad o relación. No se intercambian por variedad.

**The Text-Plus-Shape Rule.** Tipo, estado y progreso siempre incluyen texto y una forma o icono; el color nunca carga el significado por sí solo.

## Typography

**Display Font:** Space Grotesk (con Arial y sans-serif)

**Body Font:** Space Grotesk (con Arial y sans-serif)

**Label/Mono Font:** IBM Plex Mono (con Consolas y monospace)

**Character:** Space Grotesk aporta una escala editorial geométrica y cercana; IBM Plex Mono convierte rutas, fechas, estados y conteos en datos escaneables. La pareja evita tanto el futurismo genérico como el tono burocrático.

### Hierarchy

- **Display** (600, fluido, interlínea 0.76): la marca monumental del Inicio; solo uno por vista.
- **Page title** (600, fluido, interlínea 0.78): Entregas y Nosotros.
- **Detail title** (600, fluido, interlínea 0.9): título de una entrega, limitado a unas 11 letras por línea visual.
- **Section title** (600, fluido, interlínea 0.94): grandes cambios de capítulo.
- **Card title** (600, fluido, interlínea 1.08): colecciones, contribuidores y tarjetas de navegación.
- **Body** (400, 17px en escritorio y 16px en móvil, interlínea 1.65): interfaz y texto explicativo.
- **Reading** (400, 1.0625rem, interlínea 1.72): Markdown en columna de máximo 68ch.
- **Meta** (IBM Plex Mono 500, 0.78rem, interlínea 1.45): rutas, fechas y datos tabulares.
- **Label** (IBM Plex Mono 600, 0.72rem): etiquetas de tipo, estado y progreso.

La implementación usa tamaños contextuales entre `0.6rem` y `0.9rem` para chrome técnico, controles y pies de evidencia; entre `1rem` y `1.25rem` para títulos compactos, resúmenes y entradillas; y displays fluidos específicos para lema, pie, 404 y piezas editoriales. Son ajustes ópticos locales sobre esta jerarquía, no familias tipográficas nuevas.

**The One Display Rule.** Solo existe una masa Display por vista; los demás títulos bajan de escala para que el objeto principal siga siendo inequívoco.

**The Data Voice Rule.** Rutas, estados, fechas y cifras comparables usan IBM Plex Mono y números tabulares; títulos y párrafos nunca adoptan la voz de terminal.

## Layout

El contenedor mide como máximo 1280px y usa una canaleta fluida de `clamp(20px, 4vw, 56px)`. El ritmo estable nace de pasos de 4, 8, 12, 16, 24, 32, 48, 64, 96 y 128px. Las secciones usan 96px de respiración en escritorio y 72px en móvil; el texto de lectura nunca supera 68ch.

Inicio compone una escena asimétrica estable: carpeta central de hasta 850px, terminal y ficha en carriles laterales propios, y lema debajo. Las piezas nunca invaden el contenido de la carpeta. A 1180px la carpeta ocupa la fila principal y las fichas pasan a una segunda fila de dos columnas; a 767px se conserva únicamente la ficha de estado bajo la carpeta para reducir ruido y todo adopta una sola columna; a 420px desaparecen rotaciones y las acciones importantes ocupan todo el ancho. La lista de entregas conserva la lectura de archivo: seis columnas en escritorio, cinco en tablet y dos niveles semánticos en móvil.

**The One Dominant Mass Rule.** Cada viewport tiene una sola masa dominante; las demás piezas orientan o verifican, nunca compiten.

**The Flow Before Overlap Rule.** La superposición pertenece al hero y a las hojas editoriales. Índices, lectura y móvil usan flujo normal y orden DOM lógico.

## Elevation & Depth

El sistema es plano por defecto y usa profundidad solo cuando un objeto parece apoyado sobre la mesa. La carpeta y la ventana de evidencia reciben elevación flotante; terminales, fichas, hojas y menús reciben elevación de tarjeta. Divisores, listas y texto corrido permanecen planos. La ficha de metadatos de una entrada usa una sola señal exterior —sombra sin borde— para evitar el doble contorno.

### Shadow Vocabulary

- **Float:** sombra ambiental amplia para carpeta y evidencia.
- **Card:** sombra más corta para terminales, hojas, menús y ficha de metadatos.
- **Pressed:** sombra breve y local durante el estado activo de un botón.

El movimiento usa `cubic-bezier(0.22, 1, 0.36, 1)`: botones responden en 140ms, colecciones en 220ms y la escena inicial se asienta en 620–650ms. `prefers-reduced-motion` reduce animaciones y transiciones a un estado prácticamente instantáneo.

**The Physical Object Rule.** Solo carpeta, ventana, hoja, terminal, menú o control presionado proyectan sombra.

## Shapes

La geometría combina rectángulos técnicos de 10px, ventanas de 16px, tarjetas de 20px y el cuerpo de carpeta de 30px. Las píldoras completas se reservan para la navegación principal y el scrollbar. Los iconos de archivo admiten radios pequeños de 7–10px; código inline usa 5px y barras de progreso 4px. Círculos aparecen únicamente como señales, controles de ventana o nodos de icono.

La carpeta se reconoce por su silueta construida: pestañas rectangulares detrás de un cuerpo azul, no por un icono colocado sobre una tarjeta. Las colecciones repiten esa lógica con una pestaña CSS real. Los estados pendientes usan borde discontinuo; los estados confirmados usan relleno. La iconografía usa SVG lineal de trazo 1.75px y terminales redondos; elementos puramente decorativos llevan `aria-hidden`.

**The Folder Silhouette Rule.** Una carpeta se construye con cuerpo y pestañas; pegar un glifo de carpeta sobre una tarjeta no cuenta como la firma de DevNova.

**The Single-Edge Rule.** Una superficie elevada usa borde o sombra según su función, no ambos como doble marco, salvo que el borde sea un divisor interno.

## Components

### Buttons

- **Shape:** control técnico de 10px, mínimo 48px de alto, padding 12px × 18px y borde de 2px.
- **Primary:** azul eléctrico con texto blanco; oscurece en hover.
- **Paper / Carbon:** invierten el material cuando viven sobre azul o carbón.
- **Secondary / Clear line:** transparentes con contorno de alto contraste.
- **Hover / Active / Focus:** suben 2px en hover, vuelven al plano al activar y muestran un contorno externo de 3px con offset de 4px.

### Chips

- **Type:** rectángulo de 10px con icono SVG y texto; Proyecto es carbón, Taller es cian y Deber es papel delineado.
- **Status:** Entregado es azul sólido, En progreso cian suave y Planificado/Pendiente papel con borde discontinuo.
- **Technology:** cian compacto y monoespaciado; puede envolver, no se convierte en un arcoíris por tecnología.

### Cards / Containers

- **Folder:** cuerpo azul con pestañas posteriores y sombra Float; alberga contenido real y la acción principal.
- **Terminal:** carbón, radio 16px, máximo una rotación leve y chrome técnico con tintas grises locales.
- **Entry metadata sheet:** papel, radio 16px, cabecera carbón y sombra Card; sin borde exterior adicional.
- **Contributor / neighbor:** papel, radio 20px, planos en reposo; el hover cambia de superficie cuando aplica.
- **Evidence window:** marco carbón de 16px, relación visual 16:10, imagen con `object-fit: contain` y pie monoespaciado.

### Inputs / Fields

- **Style:** el buscador vive dentro de una barra repositorio carbón; el campo es papel, radio 10px, alto mínimo 46px e icono SVG de búsqueda.
- **Focus:** usa el foco global azul o cian según el material; el input interno no dibuja un segundo contorno.
- **Empty:** el estado sin resultados mantiene visibles búsqueda y filtros y ofrece limpiar.

### Navigation

La marca se alinea a la izquierda con una carpeta SVG, nombre y ruta `/main`. El nav de escritorio es una cápsula carbón: enlaces inactivos grises y activo cian con `aria-current`. A 900px se reemplaza por un botón carbón y un menú desplegable de ancho controlado; Escape, clic exterior y cambio de ruta lo cierran.

### File Row

La fila completa es enlace. En escritorio muestra icono de archivo, título/unidad, autoría, estado, fecha y flecha; en móvil agrupa título, estado y fecha en dos niveles. Hover cambia el papel y desplaza únicamente la flecha 4px. Los filtros eliminan filas que no coinciden y el recuento se anuncia con `aria-live`.

### Repository Folder

Es el componente de firma. Tres pestañas escalonadas (`equipo`, `entregas`, `main`) preceden un cuerpo azul con ruta, tipo, título, resumen y acciones verificables. En móvil las pestañas se comprimen, el cuerpo se alarga y todo el contenido pasa a una columna.

### Empty and Pending States

El borde discontinuo significa muestra, recurso pendiente o ausencia real. La UI declara el vacío con texto concreto y SVG/CSS; nunca inventa una captura, un repositorio, una identidad o una métrica para completar la composición.

## Do's and Don'ts

### Do:

- **Do** usar el trío crema–azul–carbón como materiales y el cian como señal activa.
- **Do** mantener la carpeta y la lista de archivos como las dos pruebas decisivas de identidad.
- **Do** mostrar tipo, estado, fecha y autoría antes de pedir que se abra una entrega.
- **Do** usar SVG geométrico o CSS para iconos, señales y siluetas.
- **Do** mantener controles táctiles de al menos 44px, foco visible y estado textual.
- **Do** conservar evidencia real a tamaño útil y declarar explícitamente cualquier pendiente.
- **Do** quitar rotación, superposición y movimiento cuando el viewport o la preferencia del usuario lo exijan.

### Don't:

- **Don't** convertir el índice o la portada en una cuadrícula de tarjetas genéricas.
- **Don't** regresar a una consola monocroma a pantalla completa, neón gamer, glassmorphism, gradientes o fondos de código decorativo.
- **Don't** usar eyebrows decorativos sobre títulos; rutas y metadatos deben tener función informativa.
- **Don't** usar emoji, caracteres tipográficos o glifos de fuente como iconografía de producto.
- **Don't** aplicar borde exterior y sombra a la vez a una ficha ya elevada.
- **Don't** introducir colores arbitrarios por tipo, tecnología, autor o estado.
- **Don't** inventar capturas, nombres, fechas, porcentajes, repositorios, commits o afirmaciones académicas.
- **Don't** esconder navegación, evidencia o metadatos esenciales detrás de hover.
