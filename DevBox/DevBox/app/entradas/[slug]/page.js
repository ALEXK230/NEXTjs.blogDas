import Link from 'next/link';
import { notFound } from 'next/navigation';
import { obtenerEntradas, obtenerEntrada } from '@/lib/entradas';
import { ETIQUETA_TIPO, formatearFecha } from '@/lib/formato';
import {
  Autores,
  BarraProgreso,
  EstadoEntrega,
  EtiquetaTipo,
  IconoCalendario,
  IconoFlecha,
  IconoRepo,
  VentanaEvidencia,
} from '../../componentes/Piezas';

export function generateStaticParams() {
  return obtenerEntradas().map((entrada) => ({ slug: entrada.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entrada = obtenerEntrada(slug);
  if (!entrada) return { title: 'Entrega no encontrada' };
  return { title: entrada.titulo, description: entrada.resumen || `${ETIQUETA_TIPO[entrada.tipo]} del semestre.` };
}

export default async function PaginaEntrada({ params }) {
  const { slug } = await params;
  const entrada = obtenerEntrada(slug);
  if (!entrada) notFound();

  const todas = obtenerEntradas();
  const indice = todas.findIndex((otra) => otra.slug === entrada.slug);
  const anterior = indice > 0 ? todas[indice - 1] : null;
  const siguiente = indice < todas.length - 1 ? todas[indice + 1] : null;

  return (
    <article className="entrada-detalle">
      <header className="contenedor entrada-hero">
        <nav className="breadcrumb meta" aria-label="Ruta de la entrega">
          <Link prefetch={false} href="/entradas/">entregas</Link><span>/</span><Link prefetch={false} href={`/entradas/?tipo=${entrada.tipo}`}>{entrada.tipo}</Link><span>/</span><span aria-current="page">{entrada.slug}.md</span>
        </nav>
        <div className="entrada-hero__grid">
          <div className="entrada-hero__principal">
            <div className="entrada-hero__etiquetas"><EtiquetaTipo tipo={entrada.tipo} />{entrada.muestra ? <span className="etiqueta-muestra">Muestra</span> : null}</div>
            <h1>{entrada.titulo}</h1>
            {entrada.resumen ? <p className="entrada-hero__resumen">{entrada.resumen}</p> : null}
          </div>
          <aside className="entrada-ficha" aria-label="Datos de la entrega">
            <div className="entrada-ficha__cabecera"><span className="meta">archivo {entrada.numero}</span><EstadoEntrega estado={entrada.estado} /></div>
            <dl>
              <div><dt>Unidad / semana</dt><dd>{entrada.unidad ?? '—'} / {entrada.semana ?? '—'}</dd></div>
              <div><dt><IconoCalendario /> Fecha de entrega</dt><dd>{formatearFecha(entrada.fechaEntrega)}</dd></div>
              <div><dt>Autoría</dt><dd><Autores autores={entrada.autores} limite={6} /></dd></div>
            </dl>
            <BarraProgreso valor={entrada.progreso} />
          </aside>
        </div>
      </header>

      <section className="seccion seccion--carbon entrada-evidencia" aria-label="Evidencia de la entrega">
        <div className="contenedor entrada-evidencia__grid">
          <VentanaEvidencia entrada={entrada} />
          <div className="entrada-evidencia__datos">
            <h2>Todo resultado debe poder comprobarse.</h2>
            <p>La captura documenta la interfaz; el repositorio conserva el código y su historial.</p>
            <p className="meta entrada-evidencia__ruta">evidencia / fuente / {entrada.slug}</p>
            {entrada.tecnologias.length > 0 ? (
              <ul className="tecnologias" aria-label="Tecnologías">
                {entrada.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
              </ul>
            ) : null}
            {entrada.repo ? (
              <a className="boton boton--papel" href={entrada.repo} target="_blank" rel="noreferrer noopener">
                <IconoRepo /> Ver repositorio<span className="solo-lectores"> (abre una pestaña nueva)</span>
              </a>
            ) : <p className="recurso-pendiente">Repositorio pendiente de enlazar.</p>}
          </div>
        </div>
      </section>

      <div className="contenedor entrada-lectura">
        {entrada.muestra ? (
          <p className="aviso-muestra"><strong>Esta publicación es una muestra.</strong> Sustituye el Markdown por la entrega real antes de presentar DevNova.</p>
        ) : null}
        <div className="entrada-lectura__ruta meta">README / {entrada.slug}</div>
        <div className="prosa entrada-lectura__cuerpo" dangerouslySetInnerHTML={{ __html: entrada.cuerpo }} />
      </div>

      <nav className="contenedor entrada-vecinos" aria-label="Entregas contiguas">
        {anterior ? (
          <Link prefetch={false} href={`/entradas/${anterior.slug}/`}>
            <span className="meta"><IconoFlecha direccion="izquierda" /> Archivo anterior</span>
            <strong>{anterior.titulo}</strong>
          </Link>
        ) : <span />}
        {siguiente ? (
          <Link prefetch={false} href={`/entradas/${siguiente.slug}/`} className="entrada-vecinos__siguiente">
            <span className="meta">Archivo siguiente <IconoFlecha /></span>
            <strong>{siguiente.titulo}</strong>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}
