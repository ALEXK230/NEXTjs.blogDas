import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ESTADOS, TIPOS } from './formato';

const DIRECTORIO = path.join(process.cwd(), 'content', 'entradas');

function leerArchivos() {
  if (!fs.existsSync(DIRECTORIO)) return [];
  return fs.readdirSync(DIRECTORIO).filter((nombre) => nombre.endsWith('.md'));
}

/**
 * El número de entrega es la posición cronológica ascendente: la primera
 * entrega del semestre es la 01 y ahí se queda. Publicar algo nuevo nunca
 * renumera lo anterior, para que el docente pueda citar "la entrega 07"
 * y siga significando lo mismo en diciembre.
 */
export function obtenerEntradas() {
  const entradas = leerArchivos().map((nombre) => {
    const crudo = fs.readFileSync(path.join(DIRECTORIO, nombre), 'utf8');
    const { data, content } = matter(crudo);
    const slug = nombre.replace(/\.md$/, '');

    return {
      slug,
      titulo: data.titulo ?? slug,
      tipo: TIPOS.includes(data.tipo) ? data.tipo : 'deber',
      fecha: data.fecha ? new Date(data.fecha).toISOString().slice(0, 10) : null,
      fechaEntrega: data.fechaEntrega ? new Date(data.fechaEntrega).toISOString().slice(0, 10) : null,
      semana: data.semana ?? null,
      unidad: data.unidad ?? null,
      estado: ESTADOS.includes(data.estado) ? data.estado : 'pendiente',
      progreso: Number.isFinite(data.progreso) ? data.progreso : null,
      proyecto: data.proyecto ?? null,
      commit: data.commit ?? null,
      rama: data.rama ?? null,
      autores: Array.isArray(data.autores) ? data.autores : [],
      repo: data.repo ?? null,
      capturas: Array.isArray(data.capturas) ? data.capturas : [],
      tecnologias: Array.isArray(data.tecnologias) ? data.tecnologias : [],
      resumen: data.resumen ?? '',
      destacada: data.destacada === true,
      muestra: data.muestra === true,
      cuerpo: marked.parse(content.trim()),
      cuerpoTexto: content.trim(),
    };
  });

  const ascendente = entradas.sort((a, b) => {
    if (a.fecha && b.fecha && a.fecha !== b.fecha) return a.fecha < b.fecha ? -1 : 1;
    return a.slug < b.slug ? -1 : 1;
  });

  return ascendente.map((entrada, indice) => ({
    ...entrada,
    numero: String(indice + 1).padStart(2, '0'),
  }));
}

/** Lo más nuevo primero: el orden en que se lee el sitio. */
export function obtenerEntradasRecientes() {
  return [...obtenerEntradas()].reverse();
}

export function obtenerEntrada(slug) {
  return obtenerEntradas().find((entrada) => entrada.slug === slug) ?? null;
}
