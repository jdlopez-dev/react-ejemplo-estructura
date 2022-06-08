import Paginador from "../paginator/Paginador";
import NewItem from "./NewsItem";
import NewsData from "./news.json";
import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let news = NewsData.map((item, index) => {
      return <NewItem key={index} {...item} />;
    });
    return (
      <section>
        <h1>Listado noticias</h1>
        {news}
        <Paginador paginaActual={1} pagMin={0} pagMax={8} />
      </section>
    );
  }
}
export default News;
