import Link from 'next/link';
import { ETIQUETA_TIPO, formatearFechaCorta } from '@/lib/formato';

const ESTADOS = {
  planificado: { etiqueta: 'Planificado', icono: 'reloj' },
  'en-progreso': { etiqueta: 'En progreso', icono: 'rama' },
  entregado: { etiqueta: 'Entregado', icono: 'check' },
  pendiente: { etiqueta: 'Estado pendiente', icono: 'reloj' },
};

function Svg({ children, size = 20, viewBox = '0 0 24 24', className }) {
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconoFlecha({ direccion = 'derecha' }) {
  const transformacion = direccion === 'izquierda' ? 'rotate(180 12 12)' : undefined;
  return <Svg><g transform={transformacion}><path d="M5 12h14" /><path d="m14 6 6 6-6 6" /></g></Svg>;
}

export function IconoRepo() {
  return <Svg><circle cx="6" cy="5" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="19" r="2" /><path d="M6 7v3c0 2 1.5 3 3.5 3H12c2 0 3.5-1 3.5-3V8" /><path d="M12 13v4" /></Svg>;
}

export function IconoArchivo() {
  return <Svg><path d="M6 2.5h8l4 4V21H6z" /><path d="M14 2.5V7h4" /><path d="m9 12 2 2-2 2m4 0h2" /></Svg>;
}

export function IconoTerminal() {
  return <Svg><rect x="2.5" y="4" width="19" height="16" rx="2.5" /><path d="m7 9 3 3-3 3m6 0h4" /></Svg>;
}

export function IconoCalendario() {
  return <Svg><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M8 3v4m8-4v4M3 10h18" /></Svg>;
}

export function IconoCheck() {
  return <Svg><path d="m5 12 4.5 4.5L19 7" /></Svg>;
}

export function IconoReloj() {
  return <Svg><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>;
}

export function IconoRama() {
  return <Svg><circle cx="6" cy="5" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="6" cy="19" r="2" /><path d="M6 7v10m2-5h4c3.3 0 6-1.3 6-3" /></Svg>;
}

export function IconoBuscar() {
  return <Svg><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></Svg>;
}

export function IconoCerrar() {
  return <Svg size={18}><path d="M6 6l12 12M18 6 6 18" /></Svg>;
}

export function IconoGitHub() {
  return <Svg><path d="M9 19c-4 1.2-4-2.3-5.6-2.8" /><path d="M15 21v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.7 2.8 5.7 5.5 6a2.9 2.9 0 0 0-.8 2.2V21" /></Svg>;
}

export function EtiquetaTipo({ tipo }) {
  const Icono = tipo === 'proyecto' ? IconoRama : tipo === 'taller' ? IconoTerminal : IconoArchivo;
  return (
    <span className="etiqueta-tipo" data-tipo={tipo}>
      <Icono />
      {ETIQUETA_TIPO[tipo] ?? 'Entrega'}
    </span>
  );
}

export function EstadoEntrega({ estado = 'pendiente' }) {
  const datos = ESTADOS[estado] ?? ESTADOS.pendiente;
  const Icono = datos.icono === 'check' ? IconoCheck : datos.icono === 'rama' ? IconoRama : IconoReloj;
  return (
    <span className="estado-entrega" data-estado={estado}>
      <Icono />
      {datos.etiqueta}
    </span>
  );
}

export function BarraProgreso({ valor }) {
  if (!Number.isFinite(valor)) return null;
  const seguro = Math.max(0, Math.min(100, valor));
  return (
    <div className="progreso" aria-label={`Progreso declarado: ${seguro}%`}>
      <div className="progreso__cabecera"><span>progreso</span><strong>{seguro}%</strong></div>
      <div className="progreso__pista" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={seguro}>
        <span style={{ width: `${seguro}%` }} />
      </div>
    </div>
  );
}

export function Autores({ autores, limite = 3 }) {
  if (!autores?.length) return <span>Autoría pendiente</span>;
  const visibles = autores.slice(0, limite);
  const extra = autores.length - visibles.length;
  return <span>{visibles.join(', ')}{extra > 0 ? ` +${extra}` : ''}</span>;
}

export function VentanaEvidencia({ entrada, compacta = false }) {
  const captura = entrada.capturas?.[0];
  return (
    <figure className={`ventana-evidencia${compacta ? ' ventana-evidencia--compacta' : ''}`}>
      <div className="ventana-evidencia__barra">
        <span className="ventana-evidencia__controles" aria-hidden="true"><i /><i /><i /></span>
        <span>{captura ? `evidencia-${entrada.numero}.png` : 'evidencia-pendiente.md'}</span>
        <span>{entrada.tecnologias?.[0] ?? 'DevNova'}</span>
      </div>
      {captura ? (
        <img src={captura} alt={`Evidencia de ${entrada.titulo}`} />
      ) : (
        <div className="ventana-evidencia__vacio">
          <IconoTerminal />
          <p><span>$</span> esperando captura verificable</p>
          <small>La entrega conserva su repositorio y metadatos; no se simula una imagen.</small>
        </div>
      )}
      <figcaption>{captura ? 'Captura aportada por el equipo' : 'Captura pendiente · contenido de muestra'}</figcaption>
    </figure>
  );
}

export function FilaArchivo({ entrada, atenuada = false }) {
  return (
    <Link
      prefetch={false}
      href={`/entradas/${entrada.slug}/`}
      className="fila-archivo"
      data-atenuada={atenuada ? 'si' : 'no'}
    >
      <span className="fila-archivo__icono"><IconoArchivo /></span>
      <span className="fila-archivo__titulo">
        <strong>{entrada.titulo}</strong>
        <span className="meta">{entrada.unidad ? `Unidad ${entrada.unidad} · ` : ''}{entrada.semana ? `Semana ${entrada.semana}` : 'Semana pendiente'}</span>
      </span>
      <span className="fila-archivo__autores meta"><Autores autores={entrada.autores} limite={2} /></span>
      <span className="fila-archivo__estado"><EstadoEntrega estado={entrada.estado} /></span>
      <time className="fila-archivo__fecha meta" dateTime={entrada.fechaEntrega ?? entrada.fecha ?? undefined}>
        {formatearFechaCorta(entrada.fechaEntrega ?? entrada.fecha)}
      </time>
      <span className="fila-archivo__flecha"><IconoFlecha /></span>
    </Link>
  );
}

export function AvisoMuestras({ entradas }) {
  const muestras = entradas.filter((entrada) => entrada.muestra).length;
  if (muestras === 0) return null;
  return (
    <p className="aviso-muestra">
      <IconoTerminal />
      <span><strong>Contenido demostrativo.</strong> {muestras === entradas.length ? 'Todas las entradas visibles son muestras' : `${muestras} entradas son muestras`}; sustitúyelas por evidencia real del equipo.</span>
    </p>
  );
}
