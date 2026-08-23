import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import './piezas.css';
import Nav from './componentes/Nav';
import Pie from './componentes/Pie';

const sans = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  title: {
    default: 'DevNova — Ideas que compilan',
    template: '%s — DevNova',
  },
  description:
    'Repositorio editorial de proyectos, talleres y deberes de Desarrollo Asistido por Software.',
};

export const viewport = { themeColor: '#f7f3e8' };

const CONTRATO = `
  THESIS: DevNova convierte el expediente académico en una carpeta de proyecto
  explorable; rechaza el portafolio de tarjetas genéricas y la consola monocroma.
  OWN-WORLD: Papel crema, carpeta azul eléctrico, pestañas cian, terminales carbón,
  Space Grotesk editorial e IBM Plex Mono para datos verificables.
  STORY: El docente reconoce la materia, localiza una entrega, confirma estado y
  autoría, y abre su evidencia o repositorio sin fricción.
  FIRST VIEWPORT: DevNova ocupa el plano; una carpeta azul central contiene la
  última entrega, una terminal y una ficha de estado flotan en los extremos, y
  Explorar entregas vive dentro del objeto principal.
  FORM: El archivo que compila, dirección fijada por el usuario y documentada en
  DESIGN.md; migración completa de las cuatro rutas existentes.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<!--${CONTRATO}-->` }} />
        <a className="saltar" href="#contenido">Saltar al contenido</a>
        <Nav />
        <main id="contenido">{children}</main>
        <Pie />
      </body>
    </html>
  );
}
