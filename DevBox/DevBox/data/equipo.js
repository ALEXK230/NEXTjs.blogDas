/**
 * MARCADORES DE POSICIÓN — sustituir por los datos reales del equipo.
 *
 * Nada de esto es información real: son seis huecos con la forma exacta que
 * el sitio necesita. Cambia `nombre`, `rol` y `github`, y deja `foto` con la
 * ruta del retrato en /public/equipo/ cuando lo tengas. Mientras `pendiente`
 * sea true, la página lo declara en voz alta
 * para que nadie lea estos huecos como datos del equipo.
 */
export const equipo = [
  { id: 1, nombre: 'Integrante 01', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
  { id: 2, nombre: 'Integrante 02', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
  { id: 3, nombre: 'Integrante 03', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
  { id: 4, nombre: 'Integrante 04', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
  { id: 5, nombre: 'Integrante 05', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
  { id: 6, nombre: 'Integrante 06', rol: 'Rol por definir', github: null, foto: null, pendiente: true },
];

/**
 * MARCADORES DE POSICIÓN — el equipo dijo tener misión y visión escritas.
 * Pegar aquí los textos tal cual; no reescribirlos.
 */
export const mision = {
  texto: 'Aquí va la misión del equipo, tal como la tienen escrita.',
  pendiente: true,
};

export const vision = {
  texto: 'Aquí va la visión del equipo, tal como la tienen escrita.',
  pendiente: true,
};

export const curso = {
  materia: 'Desarrollo Asistido por Software',
  descripcion:
    'Repositorio académico de proyectos, talleres y deberes. Cada archivo deja visible el proceso, la autoría y la evidencia.',
};
