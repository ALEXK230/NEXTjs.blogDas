---
titulo: "Sistema de reservas: primer avance"
tipo: proyecto
fecha: 2026-05-12
fechaEntrega: 2026-05-12
semana: 5
unidad: 1
estado: entregado
proyecto: reservas
autores: ["Integrante 01", "Integrante 03", "Integrante 06"]
repo: "https://github.com/usuario/repositorio"
capturas: []
tecnologias: ["React", "Vite", "Node.js"]
resumen: "Primer entregable del proyecto del semestre: modelo de datos, arquitectura y las pantallas de listado y detalle funcionando."
muestra: true
---
## Alcance de este avance

Este entregable cubre la base del proyecto: el modelo de datos, la decisión de arquitectura y dos pantallas navegables con datos reales.

## Arquitectura

Separamos el cliente del servicio de datos desde el principio, aunque para este avance el servicio devuelve datos fijos. La decisión nos permite avanzar en la interfaz sin bloquearnos esperando la base de datos.

## Estado actual

- Listado de espacios reservables, con filtro por franja horaria.
- Detalle de un espacio con su disponibilidad.
- Sin persistencia todavía: eso entra en el avance siguiente.

## Qué nos costó

Coordinar seis personas sobre el mismo repositorio en la primera semana. Los conflictos de fusión bajaron mucho en cuanto repartimos por carpetas en lugar de por tareas sueltas.
