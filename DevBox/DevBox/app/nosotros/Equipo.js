import { IconoGitHub } from '../componentes/Piezas';

function Retrato({ integrante }) {
  if (integrante.foto) {
    return <img className="contribuidor__retrato" src={integrante.foto} alt={`Retrato de ${integrante.nombre}`} />;
  }
  return (
    <span className="contribuidor__retrato contribuidor__retrato--pendiente">
      <span aria-hidden="true">{String(integrante.id).padStart(2, '0')}</span>
      <span className="solo-lectores">Retrato pendiente</span>
    </span>
  );
}

export default function Equipo({ equipo }) {
  return (
    <ul className="contribuidores">
      {equipo.map((integrante) => (
        <li key={integrante.id} className="contribuidor">
          <div className="contribuidor__archivo meta"><span>contributor-{String(integrante.id).padStart(2, '0')}.json</span><span>{integrante.pendiente ? 'pendiente' : 'activo'}</span></div>
          <Retrato integrante={integrante} />
          <div className="contribuidor__identidad">
            <h3>{integrante.nombre}</h3>
            <p>{integrante.rol}</p>
          </div>
          {integrante.github ? (
            <a href={`https://github.com/${integrante.github}`} target="_blank" rel="noreferrer noopener">
              <IconoGitHub /> @{integrante.github}<span className="solo-lectores"> (abre una pestaña nueva)</span>
            </a>
          ) : <span className="contribuidor__pendiente meta">GitHub pendiente</span>}
        </li>
      ))}
    </ul>
  );
}
