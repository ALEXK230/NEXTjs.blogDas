---
titulo: "Pruebas automatizadas sobre el proyecto"
tipo: taller
fecha: 2026-06-03
fechaEntrega: 2026-06-03
semana: 8
unidad: 2
estado: entregado
autores: ["Integrante 03", "Integrante 05"]
repo: "https://github.com/usuario/repositorio"
capturas: []
tecnologias: ["Vitest", "Testing Library"]
resumen: "Escribimos la primera batería de pruebas del proyecto y descubrimos dos errores que la revisión manual no había visto."
muestra: true
---
## Qué hicimos

Añadimos pruebas unitarias sobre la lógica de disponibilidad y pruebas de componente sobre el listado de espacios.

## Resultado

Las pruebas encontraron dos errores reales: una franja horaria que se solapaba consigo misma y un filtro que perdía el último elemento de la lista. Ninguno de los dos se había visto en las revisiones manuales.

## Qué aprendimos

Escribir la prueba obliga a decidir qué se considera comportamiento correcto. En los dos casos, el error apareció al intentar redactar la expectativa, antes incluso de ejecutar nada.
