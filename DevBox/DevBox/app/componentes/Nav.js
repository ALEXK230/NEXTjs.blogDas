'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const ENLACES = [
  { href: '/', etiqueta: 'Inicio' },
  { href: '/entradas/', etiqueta: 'Entregas' },
  { href: '/nosotros/', etiqueta: 'Nosotros' },
];

function esActivo(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href.replace(/\/$/, ''));
}

function Marca() {
  return (
    <Link prefetch={false} href="/" className="marca" aria-label="DevNova, inicio">
      <span className="marca__glifo" aria-hidden="true">
        <svg viewBox="0 0 28 24" fill="none">
          <path d="M2 5.5h9l2.2-3H26v18.5H2z" fill="currentColor" />
          <path d="M2 8h24" stroke="var(--color-cyan)" strokeWidth="2" />
        </svg>
      </span>
      <span className="marca__nombre">DevNova</span>
      <span className="marca__ruta" aria-hidden="true">/main</span>
    </Link>
  );
}

function FlechaExterna() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const contenedor = useRef(null);

  useEffect(() => setAbierto(false), [pathname]);

  useEffect(() => {
    if (!abierto) return undefined;
    function tecla(evento) {
      if (evento.key === 'Escape') setAbierto(false);
    }
    function fuera(evento) {
      if (contenedor.current && !contenedor.current.contains(evento.target)) setAbierto(false);
    }
    document.addEventListener('keydown', tecla);
    document.addEventListener('pointerdown', fuera);
    return () => {
      document.removeEventListener('keydown', tecla);
      document.removeEventListener('pointerdown', fuera);
    };
  }, [abierto]);

  return (
    <header className="nav-zona">
      <div className="nav-interior" ref={contenedor}>
        <Marca />
        <nav className="nav-principal" aria-label="Principal">
          {ENLACES.map((enlace) => (
            <Link
              prefetch={false}
              key={enlace.href}
              href={enlace.href}
              className="nav-principal__enlace"
              aria-current={esActivo(pathname, enlace.href) ? 'page' : undefined}
            >
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>
        <span className="nav-estado"><span aria-hidden="true" /> repo público</span>
        <button
          type="button"
          className="nav-menu-boton"
          aria-expanded={abierto}
          aria-controls="nav-menu-movil"
          onClick={() => setAbierto((valor) => !valor)}
        >
          <span>{abierto ? 'Cerrar' : 'Menú'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            {abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
        <div id="nav-menu-movil" className="nav-menu-movil" hidden={!abierto}>
          {ENLACES.map((enlace) => (
            <Link
              prefetch={false}
              key={enlace.href}
              href={enlace.href}
              aria-current={esActivo(pathname, enlace.href) ? 'page' : undefined}
            >
              {enlace.etiqueta}<FlechaExterna />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
