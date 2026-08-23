/**
 * Helpers puros, sin acceso a disco: los importan tanto los componentes de
 * servidor como los de cliente, así que aquí no puede entrar `node:fs`.
 */

export const TIPOS = ['proyecto', 'taller', 'deber'];
export const ESTADOS = ['planificado', 'en-progreso', 'entregado'];

export const ETIQUETA_TIPO = {
  proyecto: 'Proyecto',
  taller: 'Taller',
  deber: 'Deber',
};

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

export function formatearFecha(fecha) {
  if (!fecha) return 'Sin fecha';
  const [anio, mes, dia] = fecha.split('-');
  return `${Number(dia)} ${MESES[Number(mes) - 1]} ${anio}`;
}

export function formatearFechaCorta(fecha) {
  if (!fecha) return 'Pendiente';
  const [anio, mes, dia] = fecha.split('-');
  return `${dia}.${mes}.${anio.slice(-2)}`;
}

export function contarPorTipo(entradas) {
  return TIPOS.reduce(
    (acumulado, tipo) => ({
      ...acumulado,
      [tipo]: entradas.filter((entrada) => entrada.tipo === tipo).length,
    }),
    {},
  );
}
