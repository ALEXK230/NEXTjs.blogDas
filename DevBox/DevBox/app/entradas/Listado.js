'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AvisoMuestras, FilaArchivo, IconoBuscar, IconoCerrar, IconoRepo } from '../componentes/Piezas';

const FILTROS = [
  { valor: 'todas', etiqueta: 'Todas' },
  { valor: 'proyecto', etiqueta: 'Proyectos' },
  { valor: 'taller', etiqueta: 'Talleres' },
  { valor: 'deber', etiqueta: 'Deberes' },
];

function normalizar(texto) {
  return String(texto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function coincide(entrada, tipo, consulta) {
  if (tipo !== 'todas' && entrada.tipo !== tipo) return false;
  if (!consulta) return true;
  const pajar = normalizar([
    entrada.titulo,
    entrada.resumen,
    entrada.numero,
    entrada.semana ? `semana ${entrada.semana}` : '',
    entrada.unidad ? `unidad ${entrada.unidad}` : '',
    entrada.tipo,
    entrada.estado,
    entrada.autores.join(' '),
    entrada.tecnologias.join(' '),
    entrada.cuerpoTexto,
  ].join(' '));
  return pajar.includes(normalizar(consulta));
}

export default function Listado({ entradas, cuentas }) {
  const parametros = useSearchParams();
  const tipoInicial = FILTROS.some((filtro) => filtro.valor === parametros.get('tipo')) ? parametros.get('tipo') : 'todas';
  const [tipo, setTipo] = useState(tipoInicial);
  const [consulta, setConsulta] = useState('');

  const visibles = useMemo(
    () => entradas.filter((entrada) => coincide(entrada, tipo, consulta.trim())),
    [entradas, tipo, consulta],
  );

  function limpiar() {
    setTipo('todas');
    setConsulta('');
  }

  return (
    <>
      <div className="repo-toolbar">
        <div className="repo-toolbar__ruta meta"><IconoRepo /> devnova / entregas / <strong>{tipo}</strong></div>
        <label className="repo-busqueda">
          <span className="solo-lectores">Buscar entregas</span>
          <IconoBuscar />
          <input
            type="search"
            value={consulta}
            onChange={(evento) => setConsulta(evento.target.value)}
            placeholder="Título, autor o tecnología"
          />
          {consulta ? <button type="button" onClick={() => setConsulta('')}><span className="solo-lectores">Limpiar búsqueda</span><IconoCerrar /></button> : null}
        </label>
      </div>

      <div className="filtros-repo" role="group" aria-label="Filtrar por tipo de entrega">
        {FILTROS.map((filtro) => (
          <button
            key={filtro.valor}
            type="button"
            aria-pressed={tipo === filtro.valor}
            onClick={() => setTipo(filtro.valor)}
          >
            {filtro.etiqueta}
            <span>{filtro.valor === 'todas' ? entradas.length : cuentas[filtro.valor]}</span>
          </button>
        ))}
      </div>

      <div className="repo-resultados">
        <p className="meta" role="status" aria-live="polite">
          {visibles.length === entradas.length ? `${entradas.length} archivos, de la entrega más reciente a la primera.` : `${visibles.length} de ${entradas.length} archivos coinciden.`}
        </p>
        {(tipo !== 'todas' || consulta) ? <button type="button" className="limpiar-filtros" onClick={limpiar}>Limpiar filtros <IconoCerrar /></button> : null}
      </div>

      <AvisoMuestras entradas={entradas} />

      {visibles.length > 0 ? (
        <div className="lista-archivos lista-archivos--indice">
          <div className="lista-archivos__cabecera meta" aria-hidden="true">
            <span>Archivo</span><span>Autoría</span><span>Estado</span><span>Entrega</span><span />
          </div>
          {visibles.map((entrada) => <FilaArchivo key={entrada.slug} entrada={entrada} />)}
        </div>
      ) : (
        <div className="sin-resultados">
          <h2>No hay una entrega con esos datos.</h2>
          <p><span className="meta">0 archivos encontrados.</span> Prueba otra tecnología, un apellido o vuelve a ver todo el repositorio.</p>
          <button type="button" className="boton boton--primario" onClick={limpiar}>Mostrar todas</button>
        </div>
      )}
    </>
  );
}
