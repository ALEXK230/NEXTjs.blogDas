---
titulo: "Integración continua con GitHub Actions"
tipo: taller
fecha: 2026-06-17
fechaEntrega: 2026-06-17
semana: 9
unidad: 2
estado: entregado
autores: ["Integrante 01", "Integrante 06"]
repo: "https://github.com/usuario/repositorio"
capturas: []
tecnologias: ["GitHub Actions", "Node.js"]
resumen: "Automatizamos la verificación en cada push para que ninguna rama pueda fusionarse con las pruebas en rojo."
muestra: true
---
## Qué hicimos

Configuramos un flujo que instala dependencias, ejecuta el linter y lanza las pruebas en cada push y en cada solicitud de fusión.

## Regla que adoptamos

Ninguna rama se fusiona con la verificación en rojo. Sin excepciones, tampoco al final del plazo de entrega.

## Efecto medible

Los conflictos que llegaban a la rama principal desaparecieron casi por completo. El coste es esperar unos minutos a que termine la verificación, que es mucho menos de lo que costaba arreglar el desastre después.
