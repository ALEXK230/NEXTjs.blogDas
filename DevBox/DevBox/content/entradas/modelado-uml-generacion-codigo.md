---
titulo: "Modelado UML y generación de código"
tipo: taller
fecha: 2026-04-28
fechaEntrega: 2026-04-28
semana: 3
unidad: 1
estado: entregado
autores: ["Integrante 02", "Integrante 03", "Integrante 05"]
repo: "https://github.com/usuario/repositorio"
capturas: []
tecnologias: ["PlantUML", "Java"]
resumen: "Partimos de un diagrama de clases y generamos el esqueleto del código para medir cuánto trabajo se ahorra de verdad."
muestra: true
---
## Qué hicimos

Modelamos el dominio de un sistema de préstamos en un diagrama de clases y generamos a partir de él las clases base, con atributos y firmas de métodos.

## Lo que la generación sí resuelve

- La estructura repetitiva: clases, atributos, constructores y accesores.
- La coherencia de nombres entre el modelo y el código.

## Lo que no resuelve

Toda la lógica. El código generado compila y no hace nada. Sirve como punto de partida, no como entrega.

## Qué aprendimos

Generar es barato; mantener el modelo sincronizado cuando el código evoluciona es lo caro. Si nadie actualiza el diagrama, en dos semanas el modelo miente.
