function NoticiaListado(props) {
  return (
    <article className="noticia">
      <h1>{props.titulo}</h1>
      <div className="cnt">
        <img src={props.imagen} alt={props.titulo} width={100}></img>
        <p>{props.contenido}</p>
      </div>
    </article>
  );
}
export default NoticiaListado;
