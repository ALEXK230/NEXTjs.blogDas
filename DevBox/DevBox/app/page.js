import Link from 'next/link';
import { obtenerEntradasRecientes } from '@/lib/entradas';
import { contarPorTipo, formatearFecha } from '@/lib/formato';
import { curso } from '@/data/equipo';
import {
  AvisoMuestras,
  BarraProgreso,
  EstadoEntrega,
  EtiquetaTipo,
  FilaArchivo,
  IconoCheck,
  IconoFlecha,
  IconoRepo,
  IconoTerminal,
  VentanaEvidencia,
} from './componentes/Piezas';

export default function Inicio() {
  const entradas = obtenerEntradasRecientes();
  const destacada = entradas.find((entrada) => entrada.destacada) ?? entradas[0] ?? null;
  const cuentas = contarPorTipo(entradas);
  const recientes = entradas.filter((entrada) => entrada.slug !== destacada?.slug).slice(0, 4);

  return (
    <>
      <section className="hero-devnova contenedor" aria-labelledby="titulo-devnova">
        <h1 id="titulo-devnova" className="hero-devnova__titulo">DevNova</h1>

        <div className="hero-devnova__escena">
          <div className="hero-terminal" aria-label="Resumen del repositorio">
            <div className="hero-terminal__barra"><span /><span>overview.sh</span><IconoTerminal /></div>
            <p><span>$</span> devnova --status</p>
            <p><b>{entradas.length}</b> archivos indexados</p>
            <p><b>{cuentas.proyecto}</b> proyectos · <b>{cuentas.taller}</b> talleres · <b>{cuentas.deber}</b> deberes</p>
            <p className="hero-terminal__ok"><IconoCheck /> contenido versionado</p>
          </div>

          <div className="repo-folder">
            <div className="repo-folder__pestanas" aria-hidden="true">
              <span>equipo</span><span>entregas</span><span>main</span>
            </div>
            <div className="repo-folder__cuerpo">
              {destacada ? (
                <>
                  <div className="repo-folder__ruta meta">devnova / entradas / {destacada.slug}.md</div>
                  <div className="repo-folder__contenido">
                    <div>
                      <EtiquetaTipo tipo={destacada.tipo} />
                      <h2>{destacada.titulo}</h2>
                      <p>{destacada.resumen}</p>
                    </div>
                    <div className="repo-folder__acciones">
                      <Link prefetch={false} className="boton boton--papel" href={`/entradas/${destacada.slug}/`}>
                        Abrir archivo <IconoFlecha />
                      </Link>
                      <Link prefetch={false} className="enlace-tecnico" href="/entradas/">
                        Explorar todo el repositorio
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="repo-folder__vacio">
                  <h2>Repositorio preparado</h2>
                  <p>Añade la primera entrega Markdown para abrir este archivo.</p>
                  <Link prefetch={false} className="boton boton--papel" href="/entradas/">Ver estructura <IconoFlecha /></Link>
                </div>
              )}
            </div>
          </div>

          {destacada ? (
            <aside className="hero-estado" aria-label="Estado de la entrega destacada">
              <div className="hero-estado__cabecera"><span>Entrega {destacada.numero}</span><span className="hero-estado__senal" aria-hidden="true" /></div>
              <EstadoEntrega estado={destacada.estado} />
              <dl>
                <div><dt>Semana</dt><dd>{destacada.semana ?? '—'}</dd></div>
                <div><dt>Entrega</dt><dd>{formatearFecha(destacada.fechaEntrega)}</dd></div>
              </dl>
              <BarraProgreso valor={destacada.progreso} />
            </aside>
          ) : null}
        </div>

        <div className="hero-devnova__pie">
          <p className="hero-devnova__lema">Ideas que compilan,<br />proyectos que evolucionan.</p>
          <p className="hero-devnova__descripcion">{curso.descripcion}</p>
        </div>
      </section>

      {entradas.length > 0 ? (
        <section className="seccion seccion--azul">
          <div className="contenedor destacada-editorial">
            <div className="destacada-editorial__texto">
              <h2>El trabajo habla<br />con evidencia.</h2>
              <p className="meta destacada-editorial__archivo">Archivo reciente / {destacada.numero}</p>
              <p>{destacada.resumen}</p>
              <div className="acciones">
                <Link prefetch={false} className="boton boton--carbon" href={`/entradas/${destacada.slug}/`}>
                  Leer la entrega <IconoFlecha />
                </Link>
                {destacada.repo ? (
                  <a className="boton boton--linea-clara" href={destacada.repo} target="_blank" rel="noreferrer noopener">
                    <IconoRepo /> Ver repositorio<span className="solo-lectores"> (abre una pestaña nueva)</span>
                  </a>
                ) : null}
              </div>
            </div>
            <VentanaEvidencia entrada={destacada} />
          </div>
        </section>
      ) : null}

      <section className="contenedor seccion colecciones" aria-labelledby="titulo-colecciones">
        <div className="seccion-cabecera">
          <h2 id="titulo-colecciones">Tres formas de construir.</h2>
          <p>Proyectos que evolucionan, talleres que prueban y deberes que documentan lo aprendido.</p>
        </div>
        <div className="colecciones__pestanas">
          {[
            ['proyecto', 'Proyectos', 'Sistemas construidos por etapas y entregas de mayor alcance.'],
            ['taller', 'Talleres', 'Práctica guiada, herramientas y experimentos verificables.'],
            ['deber', 'Deberes', 'Análisis, decisiones y fundamentos documentados.'],
          ].map(([tipo, titulo, descripcion]) => (
            <Link prefetch={false} key={tipo} href={`/entradas/?tipo=${tipo}`} className="coleccion" data-tipo={tipo}>
              <span className="coleccion__cuenta meta">{String(cuentas[tipo]).padStart(2, '0')} archivos</span>
              <EtiquetaTipo tipo={tipo} />
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
              <span className="coleccion__accion">Abrir carpeta <IconoFlecha /></span>
            </Link>
          ))}
        </div>
      </section>

      {recientes.length > 0 ? (
        <section className="contenedor seccion archivos-recientes" aria-labelledby="titulo-recientes">
          <div className="seccion-cabecera seccion-cabecera--fila">
            <h2 id="titulo-recientes">Actividad reciente</h2>
            <Link prefetch={false} className="enlace-editorial" href="/entradas/">Ver todas las entregas <IconoFlecha /></Link>
          </div>
          <AvisoMuestras entradas={entradas} />
          <div className="lista-archivos">
            {recientes.map((entrada) => <FilaArchivo key={entrada.slug} entrada={entrada} />)}
          </div>
        </section>
      ) : null}

      <section className="contenedor seccion equipo-cta">
        <div className="equipo-cta__terminal">
          <span className="meta">contributors.json</span>
          <p><span>6</span> personas,<br />un repositorio común.</p>
        </div>
        <div className="equipo-cta__texto">
          <h2>Aprender también es dejar rastro.</h2>
          <p>Cada entrega declara quién participó, qué decisiones se tomaron y dónde puede comprobarse el resultado.</p>
          <Link prefetch={false} className="boton boton--primario" href="/nosotros/">Conocer al equipo <IconoFlecha /></Link>
        </div>
      </section>
    </>
  );
}
