import { Suspense } from 'react';
import { obtenerEntradasRecientes } from '@/lib/entradas';
import { contarPorTipo } from '@/lib/formato';
import Listado from './Listado';

export const metadata = {
  title: 'Entregas',
  description: 'Proyectos, talleres y deberes organizados como un repositorio académico verificable.',
};

function CargandoIndice() {
  return <p className="aviso-muestra">Preparando el índice de entregas…</p>;
}

export default function PaginaEntradas() {
  const entradas = obtenerEntradasRecientes();
  const cuentas = contarPorTipo(entradas);

  return (
    <div className="pagina-entregas">
      <header className="contenedor cabecera-pagina cabecera-pagina--entregas">
        <h1>Entregas</h1>
        <div>
          <p>Un semestre completo, organizado como archivos que se pueden buscar, abrir y verificar.</p>
          <span className="meta">{entradas.length} archivos / 3 colecciones / orden reciente</span>
        </div>
      </header>

      <section className="contenedor indice-repo" aria-label="Índice de entregas">
        {entradas.length === 0 ? (
          <div className="vacio-repo">
            <div className="vacio-repo__carpeta" aria-hidden="true" />
            <h2>El repositorio está listo</h2>
            <p>Añade un archivo Markdown a <code>content/entradas/</code> y aparecerá aquí.</p>
          </div>
        ) : (
          <Suspense fallback={<CargandoIndice />}>
            <Listado entradas={entradas} cuentas={cuentas} />
          </Suspense>
        )}
      </section>
    </div>
  );
}
