import Link from 'next/link';
import { IconoFlecha, IconoTerminal } from './componentes/Piezas';

export const metadata = { title: 'Archivo no encontrado' };

export default function NoEncontrada() {
  return (
    <div className="contenedor pagina-404">
      <div className="pagina-404__codigo"><span>4</span><div><IconoTerminal /><b>archivo<br />no encontrado</b></div><span>4</span></div>
      <div className="pagina-404__texto">
        <h1>La ruta no compila.</h1>
        <p>Puede que la entrega se haya movido o que el enlace esté incompleto.</p>
        <div className="acciones">
          <Link prefetch={false} className="boton boton--primario" href="/entradas/">Abrir entregas <IconoFlecha /></Link>
          <Link prefetch={false} className="boton boton--secundario" href="/">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
