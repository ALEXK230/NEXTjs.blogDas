---
titulo: "Refactorización asistida por el IDE"
tipo: deber
fecha: 2026-07-01
fechaEntrega: 2026-07-01
semana: 11
unidad: 2
estado: entregado
autores: ["Integrante 05"]
repo: null
capturas: []
tecnologias: ["VS Code", "ESLint"]
resumen: "Aplicamos refactorizaciones automáticas sobre nuestro propio código y anotamos cuáles fueron seguras y cuáles no."
muestra: true
---
## Planteamiento

El deber pedía aplicar refactorizaciones asistidas y evaluar el resultado. Lo hicimos sobre nuestro propio proyecto en lugar de sobre un ejemplo de laboratorio.

## Seguras

- Renombrar símbolos en todo el proyecto.
- Extraer función a partir de una selección.
- Convertir a constante y mover a otro módulo.

## No tan seguras

La extracción automática de componentes en React. La herramienta acierta con el marcado, pero deja el estado en un sitio que casi nunca es el correcto.

## Conclusión

La asistencia es fiable cuando la transformación es puramente sintáctica. En cuanto hay que decidir dónde vive el estado, la decisión sigue siendo del programador.
