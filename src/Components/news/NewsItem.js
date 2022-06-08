function NoticiaListado(props) {
  return (
    <article className="noticia">
      <h1>{props.titulo}</h1>
      <div className="cnt">
        {props.imagen && <img src={props.imagen} alt={props.titulo} width={40}></img>}
        
        <p>{props.contenido}</p>
      </div>
    </article>
  );
}
export default NoticiaListado;
