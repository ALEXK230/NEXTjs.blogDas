import Link from 'next/link';
import { curso, equipo, mision, vision } from '@/data/equipo';
import { IconoFlecha, IconoRama, IconoTerminal } from '../componentes/Piezas';
import Equipo from './Equipo';

export const metadata = {
  title: 'Nosotros',
  description: 'El equipo que construye y documenta DevNova durante el semestre.',
};

function Declaracion({ titulo, contenido, clase }) {
  return (
    <article className={`declaracion-hoja ${clase}`}>
      <div className="declaracion-hoja__barra meta"><span>docs/{titulo.toLowerCase()}.md</span><span>{contenido.pendiente ? 'pendiente' : 'confirmado'}</span></div>
      <h2>{titulo}</h2>
      <p>{contenido.texto}</p>
      {contenido.pendiente ? <span className="declaracion-hoja__nota meta">Sustituir por el texto oficial del equipo.</span> : null}
    </article>
  );
}

export default function PaginaNosotros() {
  const pendientes = equipo.filter((integrante) => integrante.pendiente).length;
  return (
    <div className="pagina-nosotros">
      <header className="contenedor nosotros-hero">
        <div className="nosotros-hero__titulo">
          <h1>Nosotros</h1>
          <p>Seis personas construyendo, probando y documentando el mismo repositorio de aprendizaje.</p>
        </div>
        <div className="nosotros-hero__terminal">
          <div className="meta"><IconoTerminal /> team.config</div>
          <p><span>materia:</span> {curso.materia}</p>
          <p><span>integrantes:</span> 6</p>
          <p><span>principio:</span> evidencia compartida</p>
          <div className="nosotros-hero__rama"><IconoRama /><span>main</span><i /><span>aprender</span></div>
        </div>
      </header>

      <section className="seccion seccion--azul" aria-label="Misión y visión">
        <div className="contenedor declaraciones">
          <Declaracion titulo="Misión" contenido={mision} clase="declaracion-hoja--mision" />
          <Declaracion titulo="Visión" contenido={vision} clase="declaracion-hoja--vision" />
        </div>
      </section>

      <section className="contenedor seccion equipo-seccion" aria-labelledby="titulo-equipo">
        <div className="seccion-cabecera seccion-cabecera--fila">
          <div><h2 id="titulo-equipo">Contribuidores</h2><p>La autoría se declara en cada entrega y se comprueba en el historial del trabajo.</p></div>
          <span className="meta">{6 - pendientes}/6 perfiles completados</span>
        </div>
        {pendientes > 0 ? <p className="aviso-muestra"><strong>Perfiles pendientes.</strong> Completa nombre, rol, foto y GitHub en <code>data/equipo.js</code>.</p> : null}
        <Equipo equipo={equipo} />
      </section>

      <section className="contenedor seccion nosotros-cierre">
        <p>El resultado importa.<br />El proceso también.</p>
        <Link prefetch={false} className="boton boton--primario" href="/entradas/">Explorar las entregas <IconoFlecha /></Link>
      </section>
    </div>
  );
}
