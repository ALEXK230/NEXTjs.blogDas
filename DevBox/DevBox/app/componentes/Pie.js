import Link from 'next/link';
import { curso } from '@/data/equipo';
import { IconoFlecha } from './Piezas';

export default function Pie() {
  return (
    <footer className="pie-zona">
      <div className="contenedor pie">
        <div className="pie__cierre">
          <p className="pie__marca">DevNova</p>
          <p className="pie__lema">Ideas que compilan,<br />proyectos que evolucionan.</p>
        </div>
        <div className="pie__rutas">
          <p className="meta">devnova / {curso.materia.toLowerCase()}</p>
          <nav aria-label="Navegación del pie">
            <Link prefetch={false} href="/">Inicio <IconoFlecha /></Link>
            <Link prefetch={false} href="/entradas/">Entregas <IconoFlecha /></Link>
            <Link prefetch={false} href="/nosotros/">Nosotros <IconoFlecha /></Link>
          </nav>
          <p className="meta">Sitio académico · contenido versionado con Git</p>
        </div>
      </div>
    </footer>
  );
}
